import React from 'react';
import { useHistory } from 'react-router-dom';
import routerList from '../../routers';
import './style.less';

export default function index() {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <div className="columns">
          {routerList
            .filter(v => v.title)
            .map(({ title, path }, id) => (
              <div
                key={id}
                className="borderStyle column col-xm-4 col-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p0"
                onClick={() => history.push(path)}
              >
                {id + 1}: {title}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
