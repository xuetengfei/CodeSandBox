import React, { useEffect } from 'react';
import exposure from './children/exposure';
import Children from './children/index';

export default function index() {
  function f1() {
    const elements1 = document.querySelectorAll('[data-v]');
    Array.from(elements1).forEach(v => {
      exposure.add({ el: v });
    });
  }

  useEffect(() => {
    f1();
  }, []);

  return (
    <div>
      <h1 data-v="title">exposure</h1>
      <Children />
    </div>
  );
}
