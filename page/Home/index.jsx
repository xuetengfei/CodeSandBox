import React from 'react';
import { Link } from 'react-router-dom';

const List = [
  {
    title: 'Lazyload Components',
    path: 'lazyload',
  },
  {
    title: 'keepalive',
    path: 'keepalive',
  },
  {
    title: 'LazyLoadImage',
    path: 'LazyLoadImage',
  },
  {
    title: 'concurrentrestrictor',
    path: 'concurrentrestrictor',
  },
  {
    title: 'xxx',
    path: 'xxx',
  },
];
export default function index() {
  return (
    <>
      <ul className="nav">
        {List.map(({ title, path }, id) => (
          <li className="nav-item" key={id}>
            <div className="card">
              <div className="card-header">
                <div className="card-title h5">
                  <Link to={`/${path}`}>{title}</Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
