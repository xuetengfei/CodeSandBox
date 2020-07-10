import React from 'react';

// export default function A() {
//   console.log('================Rendering A====================');
//   React.useEffect(() => {
//     console.log('================Inside useEffect... A====================');
//   }, []);
//   return <div>A</div>;
// }

const useRenderTimes = () => {
  const times = React.useRef(0);
  times.current += 1;
  return times.current;
};

export default function App() {
  const [count, setCount] = React.useState(0);
  const renderTime = useRenderTimes();

  return (
    <div>
      <h1>react渲染次数 : {renderTime}</h1>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>click</button>
    </div>
  );
}
