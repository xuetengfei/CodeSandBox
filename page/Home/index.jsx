import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <ul className="nav">
          <li>
            <Link to="/lazyload">Lazyload Components</Link>
          </li>
          <li>
            <Link to="/keepalive">keepalive</Link>
          </li>
          {/* {List.map(({ title, path }, id) => (
            <li className="nav-item" key={id}>
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">
                    <Link to={`/${path}`}>{title}</Link>
                  </div>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </Router>
    </>
  );
}
