import React, { useState, useEffect } from 'react';
import pLimit from 'p-limit';

const limit = pLimit(3);
// 9个请求
const api = 'https://httpbin.org/get?id=';
const ayncList = Array.from(Array(9)).map((_, i) => `${api}${i + 1}`);

function fetchData(api) {
  return fetch(api)
    .then(response => response.json())
    .catch(err => console.error(err));
}

const jobs = ayncList.map(v => limit(() => fetchData(v)));

async function run() {
  const result = await Promise.all(jobs);
  console.log(result);
}

export default function index() {
  const [state, setstate] = useState(0);

  useEffect(() => {
    // async function asyncPool(poolLimit, array, iteratorFn) {
    //   const ret = [];
    //   const executing = [];
    //   for (const item of array) {
    //     const p = iteratorFn(item);
    //     ret.push(p);
    //     const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    //     // const e = p.finally(() => executing.splice(executing.indexOf(e), 1));
    //     executing.push(e);
    //     if (executing.length >= poolLimit) {
    //       await Promise.race(executing);
    //     }
    //   }
    //   return Promise.all(ret);
    // }

    // asyncPool(3, ayncList, fetchData).then(res => {
    //   console.log('res: ', res);
    // });

    console.log('run');
    run();
  }, [state]);

  return (
    <div>
      concurrency limit
      <p>{limit.pendingCount}</p>
      <div>
        <button className="btn" onClick={() => setstate(c => c + 1)}>
          fetch Data
        </button>
      </div>
    </div>
  );
}
