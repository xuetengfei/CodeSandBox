import React, { useState } from 'react';

// 9个请求
const api = 'https://httpbin.org/get?id=';
const ayncList = Array.from(Array(100)).map((_, i) => `${api}${i + 1}`);

function fetchData(api) {
  return fetch(api)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export default function index() {
  const [ret, setRet] = useState(null);
  const [count, setCount] = useState(0);
  // asyncPool
  async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = [];
    const executing = [];
    for (const item of array) {
      const p = iteratorFn(item);
      ret.push(p);
      const e = p.then(_ => {
        setCount(c => c + 1);
        executing.splice(executing.indexOf(e), 1);
      });
      executing.push(e);
      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
    return Promise.all(ret);
  }

  function run() {
    setCount(0);
    setRet(null);
    asyncPool(20, ayncList, fetchData).then(ret => {
      console.log('ret: ', ret);
      setRet(ret.map(v => ({ args: v.args })));
    });
  }

  return (
    <div>
      <h2>concurrency limit</h2>
      <div className="toast toast-success">
        Clicking the button below will initiate the request. There were nine requests and the
        maximum concurrency control was 3. During the request process, the request will always be
        processed at the maximum number of concurrent times, reducing the request time to the
        maximum possible extent. Open the console and view Network Waterfall
      </div>
      <div className="divider"></div>
      <div>
        <button className="btn badge" onClick={run} data-badge={count}>
          fetch Data
        </button>
      </div>
      <div>
        <ul>{ret && ret.map((v, idx) => <li key={idx}>{JSON.stringify(v, null, 2)}</li>)}</ul>
      </div>
    </div>
  );
}
