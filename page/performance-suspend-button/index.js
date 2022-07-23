import React, { useEffect } from 'react';
import { showPerformance as showPanel } from './performanceBookmarklet.min.js';
import './index.less';

export default function TouchedButton() {
  useEffect(() => {
    f();
  }, []);

  function f() {
    let flag = 0; //标记是拖曳还是点击
    let oDiv = document.getElementById('div');
    let disX, disY, moveX, moveY, L, T, starX, starY, starXEnd, starYEnd;
    oDiv.addEventListener('touchstart', function (e) {
      flag = 0;
      e.preventDefault(); //阻止触摸时页面的滚动，缩放
      disX = e.touches[0].clientX - this.offsetLeft;
      disY = e.touches[0].clientY - this.offsetTop;
      console.log(e.touches[0].clientX, this.offsetLeft, disX);
      //手指按下时的坐标
      starX = e.touches[0].clientX;
      starY = e.touches[0].clientY;
      console.log(disX);
    });
    oDiv.addEventListener('touchmove', function (e) {
      flag = 1;
      L = e.touches[0].clientX - disX;
      T = e.touches[0].clientY - disY;
      //移动时 当前位置与起始位置之间的差值
      starXEnd = e.touches[0].clientX - starX;
      starYEnd = e.touches[0].clientY - starY;
      if (L < 0) {
        //限制拖拽的X范围，不能拖出屏幕
        L = 0;
      } else if (L > document.documentElement.clientWidth - this.offsetWidth) {
        L = document.documentElement.clientWidth - this.offsetWidth;
      }
      if (T < 0) {
        //限制拖拽的Y范围，不能拖出屏幕
        T = 0;
      } else if (T > document.documentElement.clientHeight - this.offsetHeight) {
        T = document.documentElement.clientHeight - this.offsetHeight;
      }
      moveX = L + 'px';
      moveY = T + 'px';
      //console.log(moveX);
      this.style.left = moveX;
      this.style.top = moveY;
    });
    oDiv.addEventListener('touchend', function (e) {
      //alert(parseInt(moveX))
      //判断滑动方向
      if (flag === 0) {
        //点击
        showPanel();
        console.log('flag', flag);
      }
    });
  }
  return (
    <div className="parent">
      <h1>performance-拖动悬浮球</h1>
      <div
        id="div"
        style={{
          width: '80px',
          height: '80px',
          position: 'fixed',
          bottom: '40px',
          right: '20px',
          border: '1px solid #eee',
          borderRadius: '50%',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 4px 4px rgba(0, 0, 0,.2)',
        }}
      >
        button
      </div>
    </div>
  );
}

/* 
 performance    suspend-
[前端vue开发：可移动的悬浮按钮的应用-Web前端之家](https://www.jiangweishan.com/article/vue20210304a1.html) 
[移动端实现可拖动的悬浮球-爱代码爱编程](https://icode.best/i/98750744842618) 
[移动端实现可拖动的悬浮球-爱代码爱编程](https://icode.best/i/98750744842618) 
[前端vue开发：可移动的悬浮按钮的应用-Web前端之家](https://www.jiangweishan.com/article/vue20210304a1.html)  
[移动端悬浮按钮组件的解析（suspend-button） - 掘金](https://juejin.cn/post/6976644510235230222) 
*/
