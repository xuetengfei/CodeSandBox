import React from 'react';
import { useHistory } from 'react-router-dom';
import routerList from '../../routers';

export default function index() {
  let history = useHistory();
  return (
    <>
      <ul className="nav">
        {routerList
          .filter(v => v.path !== '/')
          .map(({ title, path }, id) => (
            <li className="nav-item" key={id}>
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">
                    <span onClick={() => history.push(path)}>{title}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
