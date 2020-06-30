import React, { useEffect } from 'react';
import LazyImage from './components/lazyImage';
import './style.less';

const list = Array.from(Array(10)).map((_, i) => `https://picsum.photos/200/300?random=${i}`);

export default function index() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {list.map((url, idx) => (
        <LazyImage key={idx} url={url}></LazyImage>
      ))}
      <div className="lineStyle" />
    </>
  );
}
