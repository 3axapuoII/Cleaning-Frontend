import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:5555';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: (token) =>    
    requests.post('/users/me', {token}),
    //---------------------------------------------------/user
  login: (login, password) =>
    requests.post('/login', {  login, password  }),
  register: (login, password, email, firstName) =>
    requests.post('/register', { login, password, email, firstName }),
  save: (token, user) =>
    requests.post('/users/edit', { token, user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })

const Services = {
  all: () =>
    requests.get(`/Rooms`),
  add: (token, services) =>
  requests.post('/Orders/', { token, services }),
    

  getOrders: (token) =>
  requests.post('/Orders/all', { token }),


  byAuthor: () =>
    requests.get('/Basket'),
    //console.log(author),

  allServices: () =>
    requests.get('/CleaningJob'),

  changeRating: (id, order) =>
  requests.post(`/Orders/${id}`, { order }),

  getService: id =>
    requests.get(`/CleaningJob/${id}`),
//==========================================================    
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
    //=========================================================================
};

const Comments = {
  create: (token, slug, comment) =>
    requests.post(`/Review`, {token, slug, comment }),
  delete: (commentId) =>
    requests.del(`/Review/${commentId}`),
  forService: (slug) =>
    requests.get(`/Review/${slug}`),
  update: (slug, text) =>
    requests.post(`/Review/${slug}`, {text})
};

const Profile = {
  getInfo: userId =>
    requests.get(`/users/${userId}`),
  get: token =>
    requests.post('/User/me', token),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`),
  contact: (login, email, text) =>
    requests.post(`/message`, {login, email, text})
};

export default {
  Services,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: _token => { token = _token; }
};
