import React from 'react';
import { useHistory } from 'react-router-dom';

export default function index() {
  let history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="empty">
      <h5>You've logged in, current page is `Navigation Guard`</h5>
      <br />
      <div className="column col-mx-auto">
        <div className="d-inline-flex">
          <button
            className="btn btn-primary"
            onClick={handleLogout}
            style={{ marginRight: '20px' }}
          >
            Logout
          </button>
          <button className="btn" onClick={() => history.push('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
