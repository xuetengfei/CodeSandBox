import React, { useState } from 'react';
import './index.less';

// [CSS变量对JS交互组件开发带来的提升与变革 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/07/css-var-improve-components/)

const index = () => {
  const [state, setstate] = useState([20, 40, 60]);
  const [timer, setTimer] = useState(null);

  const fn = () => {
    setstate((c: number[]) => c.map((v: number) => (v >= 100 ? 0 : Math.min(100, v + 1))));
  };

  const go = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      return;
    }
    const id = setInterval(() => fn(), 50);
    setTimer(id);
  };

  return (
    <>
      <div>
        <h3>The progress bar</h3>
        <div className="bar" style={{ '--percent': state[0] }}></div>
        <div className="bar" style={{ '--percent': state[1] }}></div>
        <div className="bar" style={{ '--percent': state[2] }}></div>
        <button className="btn" onClick={go}>
          Run/Stop
        </button>
      </div>
      <br />
      <br />
      <br />
      <div className="xtf"></div>
      <br />
      <br />
      <br />
      <div>
        <h3>Tabs</h3>
        <div className="tabs">
          <a className="tabs-item">商品页</a>
          <a className="tabs-item">商品页</a>
          <a className="tabs-item">商品页</a>
          <a className="tabs-item">商品页</a>
        </div>
      </div>
    </>
  );
};

export default index;
