import React from 'react';

const arr = Array(40)
  .fill(1)
  .map((_, i) => i + 1);

export default function index() {
  return (
    <div>
      <ul>
        {arr.map(v => {
          return (
            <li data-v={v} key={v} style={{ display: 'none' }}>
              {v}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
