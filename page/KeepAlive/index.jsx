import React, { useState } from "react";
import KP from "./keepAlive";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </div>
  );
}

export default function index() {
  <button onClick={() => setCount((count) => count + 1)}>Add</button>;
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus((status) => Boolean(!status))}>
        toogle
      </button>
      keepalive
      {status && (
        <>
          <KP name="x">
            <Counter />
          </KP>
        </>
      )}
    </div>
  );
}
