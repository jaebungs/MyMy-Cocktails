import React from 'react';
import './styles/loadingStyles.css';

const LoadingPage = () => {
  return (
    <div className="loading-container">
  <div className="flex-column">
    <div className="circle"></div>
    <div className="shadow"></div>
  </div>
  <div className="flex-column">
    <div className="circle"></div>
    <div className="shadow"></div>
  </div>
  <div className="flex-column">
    <div className="circle"></div>
    <div className="shadow"></div>
  </div>
  <p className="text">Loading...</p>
</div>
  );
};

export default LoadingPage;
