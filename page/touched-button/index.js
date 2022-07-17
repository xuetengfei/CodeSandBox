import React, { useEffect } from 'react';
import './index.less';
// import interact from 'interactjs';

export default function TouchedButton() {
  useEffect(() => {
    touch();
  }, []);

  function touch() {
    let element = document.getElementById('grid-snap');
    if (!element) return;
    // 1.获取元素
    let div = element;
    // 定义初始化 手指的位置
    let startX = 0;
    let startY = 0;
    let x = 0; // 盒子的原始位置
    let y = 0; //
    let _clientWidth = document.documentElement.clientWidth;
    let _clientHeight = document.documentElement.clientHeight;
    // 2.触摸元素 touchstart：  获取手指初始坐标，同时获得盒子原来的位置
    div.addEventListener('touchstart', function (e) {
      e.preventDefault(); // 阻止屏幕滚动的默认行为
      startX = e.targetTouches[0].pageX; // 得到第一个手机的 文档位置
      startY = e.targetTouches[0].pageY;
      //同时获取盒子的位置
      x = this.offsetLeft; //得到盒子的边距
      y = this.offsetTop;
    });
    // 3.手机点击 touchmove  移动手指 touchmove：  计算手指的滑动距离，并且移动盒子
    div.addEventListener('touchmove', function (e) {
      //  计算手指的移动距离： 手指移动之后的坐标减去手指初始的坐标
      let moveX = e.targetTouches[0].pageX - startX;
      let moveY = e.targetTouches[0].pageY - startY;
      // 移动我们的盒子 盒子原来的位置 + 手指移动的距离
      this.style.left = x + moveX + 'px';
      this.style.top = y + moveY + 'px';
      let disX = moveX - div.offsetLeft; //鼠标横坐标点到div的offsetLeft距离
      let disY = moveY - div.offsetTop; //鼠标纵坐标点到div的offsetTop距离
      //鼠标移动
      let l = moveX - disX; //获取div左边的距离
      let t = moveY - disY; //获取div上边的距离

      if (l < 0) {
        //判断div的可视区，为避免DIV失去鼠标点
        l = 0;
      }
      if (l > _clientWidth - div.offsetWidth) {
        l = _clientWidth - div.offsetWidth;
      }
      if (t < 0) {
        t = 0;
      }
      if (t > _clientHeight - div.offsetHeight) {
        t = _clientHeight - div.offsetHeight;
      }
      this.style.left = l + 'px'; //确定DIV的左边位置
      this.style.top = t + 'px'; //确定DIV的上边位置
    });
  }
  function showPanel() {
    // let performanceBookmarkletURL =
    // 'https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';
    let el = document.createElement('script');
    el.type = 'text/javascript';
    el.text = require('./performanceBookmarklet.min.js');
    // el.src = performanceBookmarkletURL;
    el.onerror = function () {
      console.log(
        'Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js"\n\ninto your console instead\n\n(link is in console already)',
      );
      console.log(
        'https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js',
      );
    };
    document.getElementsByTagName('body')[0].appendChild(el);
  }

  return (
    <div className="parent">
      <h1>touched-button</h1>
      <button id="grid-snap" className="btn btn-primary" onClick={showPanel}>
        button2
      </button>
    </div>
  );
}

/* 
function fun() {
  let element = document.getElementById('grid-snap');
  if (!element) return;
  let x = 0;
  let y = 0;
  interact(element)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [interact.snappers.grid({ x: 30, y: 30 })],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }],
        }),
        interact.modifiers.restrict({
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true,
        }),
      ],
      inertia: true,
    })
    .on('dragmove', function (event) {
      x += event.dx;
      y += event.dy;
      event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
}

*/
