import React from 'react';
import { useHistory } from 'react-router-dom';

export default function index() {
  let history = useHistory();

  const handleLogin = async () => {
    localStorage.setItem('isLogin', 'yes');
    history.push('/navigation-guard');
  };

  return (
    <div className="empty">
      <p className="empty-title h5">You need login</p>
      <div className="empty-action">
        <button className="btn btn-primary" onClick={handleLogin}>
          Fake Login
        </button>
      </div>
    </div>
  );
}
