import React, { useState, useEffect } from 'react';
import agent from '../agent';

const Comments = ({ serviceId, currentUser }) => {
  const [comments, setComments] = useState(null);
  const [userInfos, setUserInfos] = useState({});
  const [currentUserCommentAuthors, setCurrentUserCommentAuthors] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedCommentText, setUpdatedCommentText] = useState('');
  const [serviceName, setServiceName] = useState('');

  useEffect(() => {
    fetchComments();
    fetchServiceName();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await agent.Comments.forService(serviceId);
      setComments(response);
      fetchUserInfos(response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserInfos = async (comments) => {
    const userIds = comments.map((comment) => comment.userId);
    const userInfoPromises = userIds.map((userId) => agent.Profile.getInfo(userId));
    const userInfos = await Promise.all(userInfoPromises);
    const userInfoMap = {};
    userInfos.forEach((userInfo) => {
      if (userInfo) {
        userInfoMap[userInfo.user.userId] = userInfo;
      }
    });
    setUserInfos(userInfoMap);
  };

  useEffect(() => {
    const fetchCurrentUserCommentAuthors = async () => {
      if (comments === null) return;
      const currentUserCommentAuthors = await Promise.all(
        comments.map(async (comment) => ({
          commentId: comment.id,
          isAuthor: await isCurrentUserCommentAuthor(comment),
        }))
      );
      setCurrentUserCommentAuthors(currentUserCommentAuthors);
    };

    fetchCurrentUserCommentAuthors();
  }, [comments]);

  const isCurrentUserCommentAuthor = async (comment) => {
    const me = await agent.Auth.current(window.localStorage.getItem('jwt'));
    return me && comment.userId === me.user.userId;
  };

  const fetchServiceName = async () => {
    try {
      const response = await agent.Services.getService(serviceId);
      setServiceName(response.name);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    await agent.Comments.delete(commentId);
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setUpdatedCommentText(comment.comment);
    }
  };

  const handleUpdateComment = async (commentId) => {
    await agent.Comments.update(commentId, updatedCommentText);
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, comment: updatedCommentText };
        }
        return comment;
      })
    );
    setEditingCommentId(null);
    setUpdatedCommentText('');
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setUpdatedCommentText('');
  };

  return (
    <div>
      <h3>Комментарии для услуги "{serviceName}"</h3>
      {comments === null ? (
        <p>Загрузка комментариев...</p>
      ) : (
        <React.Fragment>
          {comments.length === 0 ? (
            <p>Нет комментариев для этой услуги.</p>
          ) : (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  {userInfos[comment.userId] && (
                    <div>
                      <img
                        width="50px"
                        src={userInfos[comment.userId].user.image}
                        // alt={userInfos[comment.userId].user.username}
                      />
                      <span>{userInfos[comment.userId].user.username}</span>
                    </div>
                  )}
                  {editingCommentId === comment.id ? (
                    <React.Fragment>
                      <textarea
                        value={updatedCommentText}
                        onChange={(e) => setUpdatedCommentText(e.target.value)}
                      />
                      <button onClick={() => handleUpdateComment(comment.id)}>Подтвердить</button>
                      <button onClick={handleCancelEdit}>Отменить</button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <p>Текст: {comment.comment}</p>
                      <p>Дата: {comment.updatedAt}</p>
                      {currentUserCommentAuthors.find((author) => author.commentId === comment.id)
                        ? currentUserCommentAuthors.find((author) => author.commentId === comment.id).isAuthor && (
                            <div>
                              <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                              <button onClick={() => handleEditComment(comment.id)}>Редактировать</button>
                            </div>
                          )
                        : null}
                    </React.Fragment>
                  )}
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Comments;
