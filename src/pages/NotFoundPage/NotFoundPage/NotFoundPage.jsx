import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404: Cannot found this page </h1>
      <Link to="/">To home page</Link>
    </>
  );
};

export default NotFoundPage;
