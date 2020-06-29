import React from 'react';
import { useHistory } from 'react-router-dom';

const List = [
  {
    title: 'Lazyload Components',
    path: '/lazyload',
  },
  {
    title: 'keepalive',
    path: '/keepalive',
  },
  {
    title: 'LazyLoadImage',
    path: '/lazyLoadImage',
  },
  {
    title: 'concurrentrestrictor',
    path: '/concurrentrestrictor',
  },
];
export default function index() {
  let history = useHistory();
  return (
    <>
      <ul className="nav">
        {List.map(({ title, path }, id) => (
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
