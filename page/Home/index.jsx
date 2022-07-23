import React from 'react';
import { useHistory } from 'react-router-dom';
import routerList from '../../routers';

export default function index() {
  let history = useHistory();
  return (
    <>
      <ul className="nav">
        {routerList
          .filter(v => v.title)
          .map(({ title, path }, id) => (
            <li className="nav-item" key={id}>
              <div className="card" onClick={() => history.push(path)}>
                <div className="card-header">
                  <div className="card-title h5">
                    <span>{title}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
