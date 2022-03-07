import React, { useEffect } from 'react';
import LazyImage from './lazyImage';
import './style.less';

const list = Array.from(Array(10)).map((_, i) => `https://picsum.photos/500/400?random=${i}`);

export default function index() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <h2>图片懒加载</h2>
      <div className="toast toast-success">
        使用 交叉观察者(IntersectionObserver)实现图片懒加载。并且封装成一个react组件。
      </div>
      <a
        className="text-gray"
        href="https://github.com/xuetengfei/CodeSandBox/tree/master/page/LazyLoadImage"
      >
        source code is here
      </a>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {list.map((url, idx) => (
        <LazyImage key={idx} url={url}></LazyImage>
      ))}
      <div className="lineStyle">超过这条线，图片就会加载
      <p>
      rootMargin: '0px 0px -400px 0px'
      </p>
      </div>
    </>
  );
}
