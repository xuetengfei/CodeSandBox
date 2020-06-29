import React from 'react';

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
                  <a href={path}>{title}</a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
