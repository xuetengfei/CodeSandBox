import React, { useState, useEffect } from 'react';
import exposure from './children/exposure';
import Children from './children/index';

export default function index() {
  const [visibleStyle, setVisibleStyle] = useState({ display: 'none' });

  useEffect(() => {
    window.resume();
    exposureStart();
  }, []);

  window.resume = () => {
    setVisibleStyle({ display: 'block' });
  };

  function exposureStart() {
    const doms = document.querySelectorAll('[data-v]');
    Array.from(doms).forEach(v => {
      exposure.add({ el: v });
    });
  }

  return (
    <div style={visibleStyle}>
      <h1 data-v="exposure-title">exposure</h1>
      <Children />
    </div>
  );
}
