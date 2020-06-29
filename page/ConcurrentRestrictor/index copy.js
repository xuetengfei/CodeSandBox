import React, { useState, useEffect } from 'react';
// 9个请求
const api = 'http://localhost:6254/api/concurrency/';
const ayncList = Array.from(Array(9)).map((_, i) => `${api}${i + 1}`);

export default function index() {
  const [state, setstate] = useState(0);

  useEffect(() => {
    async function asyncPool(poolLimit, array, iteratorFn) {
      const ret = [];
      const executing = [];
      for (const item of array) {
        const p = iteratorFn(item);
        // Put into promises array
        ret.push(p);
        // After the promise is executed, remove it from the executing array
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        // Insert the executing number to indicate the executing promise
        executing.push(e);
        if (executing.length >= poolLimit) {
          // Using promise.race,
          // whenever the number of promises in the executing array is less than poollimit,
          // the new promise is instantiated and executed
          await Promise.race(executing);
        }
      }
      return Promise.all(ret);
    }
    asyncPool(3, ayncList, fetch).then(res => {
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
