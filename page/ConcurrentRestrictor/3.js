async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of array) {
    console.log('item: ', item);
    const p = iteratorFn(item);
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}
// asyncPool(2, [3000, 4000, 2000, 3000], timeout).then(r => console.log('r', r));

// 同步循环中的异步等待
const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
const jobs = [3000, 4000, 2000, 3000];
async function fn() {
  const ret = [];
  for (const item of jobs) {
    console.group(`-------now item: ${item}-------`);
    console.log('ret: ', ret);
    console.time('耗时');
    const p = timeout(item);
    ret.push(p);
    const ret2 = await timeout(item);
    // console.log('ret2: ', ret2);
    console.timeEnd('耗时');
    console.log('Time:', new Date().toLocaleTimeString());
    console.log('ret: ', ret);
    console.groupEnd();
  }
  return Promise.all(ret);
}
fn();
