import React, { useState, useEffect, useRef } from "react";

const map = {};
export default function keepAlive(props) {
  const { children, name } = props;
  const [state, setstate] = useState(null);
  const UUID = `sdasdasd-${name}`;
  const Dom = (
    <div id={UUID} data-keep-alive-data="name">
      {children}
    </div>
  );

  useEffect(() => {
    if (map[UUID]) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = "123";
      console.log("map[UUID]: ", map[UUID]);
      console.log("newDiv: ", newDiv);
      setstate(newDiv);
    }

    return () => {
      const dom = document.getElementById(UUID);
      map[UUID] = dom;
    };
  }, []);

  return <div> {children}</div>;
}
