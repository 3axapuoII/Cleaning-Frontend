import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font banner">
          {appName}
        </h1>
        <p>We will do the dirty work for you</p>
      </div>
    </div>
  );
};

export default Banner;
