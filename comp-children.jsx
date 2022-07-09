import React, { useState, useEffect } from 'react';

function compChildren() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(c => c + 1);
    Promise.resolve().then(() => {
      setTimeout(() => {
        setCount(c => c + 1);
      }, 500);
      setTimeout(() => {
        setCount(c => c + 1);
      }, 500);
    });
    setCount(c => c + 1);
  }, []);

  console.log(count);
  return <div>123</div>;
}

export default compChildren;
