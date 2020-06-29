const l = console.log;

let fibonacci = (len = 5, arr = [0, 1]) => {
  var a = arr[arr.length - 1];
  var b = arr.length < 2 ? 0 : arr[arr.length - 2];
  arr.push(a + b);
  return arr.length == len ? arr : fibonacci(len, arr);
};
l(fibonacci(6)); // [ 0, 1, 1, 2, 3, 5 ]

let arrr = [3, 44, 13, 38, 5, 47, 28, 34, 36, 26, 27, 2, 46, 4, 19, 50, 48];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const idx = Math.floor(arr.length / 2);
  const middle = arr.splice(idx, 1)[0];
  const l = [];
  const r = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > middle) {
      r.push(element);
    } else {
      l.push(element);
    }
  }
  return [...quickSort(l), middle, ...quickSort(r)];
}

console.log('quickSort(arr);: ', quickSort(arrr));

function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log('吃');
};

function newFn(fn, ...args) {
  const o = Object.create(fn.prototype);
  fn.apply(o, args);
  return o;
}

let litterTiger = newFn(Animal, 'Tom');
console.log('litterTiger: ', litterTiger);
litterTiger.eat();

const pipe = fns => (...x) => {
  const [firstFn, ...rest] = fns;
  const initargs = firstFn(...x);
  return [...rest].reduce((acc, cur) => {
    return cur(acc);
  }, initargs);
};

const add = a => a + 1;
const times = a => a * 2;
const sum = (a, b, c) => a + b + c;

const xue = pipe([sum, add, times])(2, 1, 3);
console.log(xue); // 14

function addMore(x) {
  let end = x;
  return function fn(y) {
    if (!arguments.length) {
      return end;
    } else {
      end += y;
      return fn;
    }
  };
}
console.log('addMore', addMore(1)(2)(3)());

return;

function curry1(fn, need = fn.length, ...args) {
  if (args.length >= need) {
    return fn(...args);
  } else {
    return curry1.bind(null, fn, need, ...args);
  }
}

const curry = (fn, need = fn.length, ...args) =>
  need <= args.length ? fn(...args) : curry.bind(null, fn, need, ...args);

l(curry1(Math.min, 4)(10)(50)(2)(4)); // 2
l(curry1(sum)(1)(2)(3)); // 4

return;

const a1 = 1;
console.log(Object.is(a1));

function isObject(object) {
  console.log('object: ', object);
  return object != null && typeof object === 'object';
}
isObject();

let arr = [1, 1, 2, 2, 3, 3];
let deduped = [...new Set(arr)];

console.log(deduped); // [1, 2, 3]

function unique(arr) {
  // 1
  // return [...new Set(arr)]
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
}
console.log('unique(arr): ', unique(arr));

// createStore
function createStore(fn) {
  let state = fn(undefined, { type: undefined });
  let observerList = [];
  return {
    getState: () => state,
    dispatch: action => {
      state = fn(state, action);
      observerList.forEach(eachObserver => eachObserver(state));
    },
    subscribe: observer => {
      observerList.push(observer);
      function unsubscribe() {
        observerList = observerList.filter(v => v !== observer);
      }
      return unsubscribe;
    },
  };
}

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
let unsubscribeConsole = store.subscribe(_ => console.log(store.getState()));
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
unsubscribeConsole();
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

// 1
// 2

const a = [{ a: 1 }];
const b = [].concat(a);
const c = [...a];
c[0].a = '2';

console.log('b: ', b);
console.log('a: ', a);
console.log('c: ', c);

function fn() {
  const min = Math.min(...arguments);
  const dotLen = min.toString().slice(min.toString().indexOf('.') + 1).length;
  const size = Math.pow(10, dotLen);
  return [...arguments].map(v => v * size).reduce((init, cur) => init + cur, 0) / size;
}

console.log('fn(0.01, 0.2): ', fn(0.01, 0.2));

const o = {
  a: {
    b: 1,
  },
  c: 2,
};

const getType = v => v.constructor.name.toLowerCase();
function deepClone(source) {
  const target = source instanceof Array ? [] : {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const element = source[key];
      target[key] = typeof element === 'object' ? deepClone(element) : element;
    }
  }
  return target;
}

const copyo = deepClone(o);
console.log('copyo: ', copyo);
console.log('copyo: ', copyo === o);
console.log('element instanceof Object : ', [] instanceof Array);
console.log('element instanceof Object : ', typeof []); // object
