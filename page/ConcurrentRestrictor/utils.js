const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_each, i) =>
    arr.slice(i * size, i * size + size),
  );

const fetch = id => {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve(id);
    }, Math.random() * 10000);
  });
};

const fetchList = Array.from({ length: 100 }, (_, i) => i).map(v => fetch(v));

// 1. 并发
// 2. 最大并发数
// 3. 保证顺序
// 4. 错误终止

function fn(asyncArray, limited) {
  //   const l = chunk(asyncArray, maxNum);
  //   const latch = false;
  //   const ret = [];
  //   const a = [];

  const arr = [...asyncArray];
  while (limited--) {
    console.log('limited: ', limited);
    fetch(arr.shift())
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log('err', err));
  }
}

fn(fetchList, 3);

// fn(fetchList, 10)
//   .then(res => console.log('res', res))
//   .catch(err => console.log('err', err));
