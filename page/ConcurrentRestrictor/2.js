function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = url => {
    const req = fetch(url)
      .then(res => {
        console.log('当前并发： ' + requestsQueue);
        const len = results.push(res);
        if (len < urlCount && i + 1 < urlCount) {
          requestsQueue.shift();
          handleRequest(urls[++i]);
        } else if (len === urlCount) {
          'function' === typeof callback && callback(results);
        }
      })
      .catch(e => {
        results.push(e);
      });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i]);
    }
  };
  handleRequest(urls[i]);
}

const urls = Array.from({ length: 10 }, (v, k) => k);

const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx);
    }, timeout);
  });
};

const max = 4;

const callback = () => {
  console.log('run callback');
};

// handleFetchQueue(urls, max, callback);
// 模拟请求
function request(param) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(param);
      resolve();
    }, param);
  });
}
const items = [500, 400, 300, 200, 100];
(() => {
  for (let item of items) {
    request(item);
  }
  console.log('end');
})();
// 输出：end, 100, 200, 300, 400, 500

let urls = Array.from({ length: 10 }, (v, k) => k);

let fetch = function (idx) {
  return new Promise(resolve => {
    let timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      resolve(idx);
    }, timeout);
  });
};

let max = 4;

let callback = () => {
  console.log('run callback');
};

/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
let sendResquest = (list, limit, asyncHandle) => {
  let recursion = arr => {
    return asyncHandle(arr.shift()).then(() => {
      if (arr.length !== 0) return recursion(arr);
      // 数组还未迭代完，递归继续进行迭代
      else return 'finish';
    });
  };

  let listCopy = [].concat(list);
  let asyncList = []; // 正在进行的所有并发异步操作
  while (limit--) {
    asyncList.push(recursion(listCopy));
  }
  return Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
};

// asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(r => console.log('r', r));

// const showColumnInfo = async () => {
//   console.time('showColumnInfo');
//   const names = ['3000', '1500'];
//   const promises = names.map(x => timeout(x));
//   for (const promise of promises) {
//     console.log('promise: ', promise);
//     const column = await promise;
//     console.log('column: ', column);
//   }
//   console.timeEnd('showColumnInfo');
// };

// showColumnInfo();
