import React, { useState, useEffect } from 'react';
// 9个请求
const api = 'http://localhost:6254/api/concurrency/';
const ayncList = Array.from(Array(9)).map((_, i) => `${api}${i + 1}`);

export default function index() {
  const [state, setstate] = useState(0);

  function fetchData(api) {
    return fetch(api)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  useEffect(() => {
    async function asyncPool(poolLimit, array, iteratorFn) {
      const ret = [];
      const executing = [];
      for (const item of array) {
        const p = iteratorFn(item);
        ret.push(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        // const e = p.finally(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          await Promise.race(executing);
        }
      }
      return Promise.all(ret);
    }

    asyncPool(3, ayncList, fetchData).then(res => {
      console.log('res: ', res);
    });
  }, [state]);

  return (
    <div>
      concurrency limit
      <div>
        <button className="btn" onClick={() => setstate(c => c + 1)}>
          fetch Data
        </button>
      </div>
    </div>
  );
}
