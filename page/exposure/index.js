import React, { useEffect } from 'react';
import exposure from './children/exposure';
import Children from './children/index';

export default function index() {
  function exposureStart() {
    const doms = document.querySelectorAll('[data-v]');
    Array.from(doms).forEach(v => {
      exposure.add({ el: v });
    });
  }

  useEffect(() => {
    exposureStart();
  }, []);

  return (
    <div>
      <h1 data-v="exposure-title">exposure</h1>
      <Children />
    </div>
  );
}
