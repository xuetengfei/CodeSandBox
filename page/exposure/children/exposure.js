// [Intersection Observer API - Web API 接口参考 | MDN](
// https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

// 节流的时间，默认是100ms
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 300;

const localStorage = window.localStorage;

class Exposure {
  constructor(maxNum = 5) {
    this.dotDataArr = []; // 进入视窗的DOM节点的数据
    this.maxNum = maxNum;
    this.timeout = 1; // 间隔时间上传一次
    this._timer = 0;
    this._observer = null; // 观察者的集合
    this.init(); // 全局只会实例化一次Exposure类
  }
  init() {
    const self = this;
    // init只会执行一次，边界处理方法，把浏览器localStorage里面的剩余数据上传
    this.dotFromLocalStorage();
    this._observer = new IntersectionObserver(
      (entries, observer) => {
        // 每一个产品进入视窗时都会触发
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 清除当前定时器
            self._timer && clearTimeout(self._timer);
            // 把相关的数据直接放DOM上面了，比如 <div :data-dot="哈哈" ></div>
            const ctm = entry.target.attributes['data-v'].value;
            // console.log('ctm', ctm);
            // const dataset = entry.target.dataset;
            // const ctm1 = {
            // platform_id: dataset.id, // 产品id 必填
            // };
            // 收集数据，进待上报的数据数组
            self.dotDataArr.push(ctm);
            // 收集到数据后，取消对该DOM节点的观察
            self._observer.unobserve(entry.target);
            // 超过一定数量直接上传
            if (self.dotDataArr.length >= self.maxNum) {
              self.dot();
            } else {
              //  否则，直接缓存
              if (self.dotDataArr.length > 0) {
                // 不断有新的ctm进来，接下来如果没增加，自动n秒后打点
                self._timer = setTimeout(() => {
                  self.dot();
                }, self.timeout);
              }
            }
          }
        });
      },
      {
        // 指定根目录，也就是当目标元素显示在这个元素中时会触发监控回调。 默认值为null，即浏览器窗口
        root: null,
        // 设定root元素的边框区域
        rootMargin: '0px',
        // number或number数组，控制target元素进入root元素中可见性超过的阙值，
        // 达到阈值会触发函数，也可以使用数据来让元素在进入时在不同的可见度返回多次值
        threshold: 0.5,
      },
    );
  }
  // 每个DOM元素通过全局唯一的Exposure的实例来执行该add方法,将自己添加进观察者中
  add(entry) {
    this._observer && this._observer.observe(entry.el);
  }
  // 上传并更新缓存
  dot() {
    const dotDataArr = this.dotDataArr.splice(0, this.maxNum);
    console.log('dotDataArr', dotDataArr);
  }
  // 缓存数据
  // 上传数据
  dotFromLocalStorage() {
    const ctmsStr = JSON.parse(localStorage.getItem('dotDataArr'));
    if (ctmsStr && ctmsStr.length > 0) {
      //   platformExposure(ctmsStr);
    }
  }
}

export default new Exposure();
