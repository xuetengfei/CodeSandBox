import React from 'react';
export default function index() {
  console.log('Rendering app...');
  const [myState, setMyState] = React.useState(0);
  const [booleanState, setBooleanState] = React.useState(false);
  console.log('myState: ' + myState);
  console.log('booleanState: ' + booleanState);
  React.useEffect(() => {
    console.log('Inside useEffect...');
    setMyState(1);
    setMyState(prevState => prevState + 1);
    setMyState(3);
    setMyState(4);
    setMyState(5);
    setBooleanState(true);
  }, []);
  return <div>Check out my console!</div>;
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
