import React from 'react';
import CompA from './components/a.js';

export default function index() {
  console.log('Rendering app...');
  const count = React.useRef(0);
  const [myState, setMyState] = React.useState(0);
  const [booleanState, setBooleanState] = React.useState(false);
  console.log('myState: ' + myState);
  console.log('booleanState: ' + booleanState);
  // React.useEffect(() => {
  //   console.log('Inside useEffect...');
  //   setMyState(1);
  //   setMyState(prevState => prevState + 1);
  //   setMyState(3);
  //   setMyState(4);
  //   setMyState(5);
  //   setBooleanState(true);
  // }, []);
  const onClickCount = () => {
    count.current++;
  };

  const onClickRequest = () => {
    console.log('count.current: ', count.current);
  };

  return (
    <div>
      Check out my console!
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
      <CompA />
    </div>
  );
}
/*
Rendering app...
myState: 0
booleanState: false
Inside useEffect...
Rendering app...
myState: 5
booleanState: true
*/
