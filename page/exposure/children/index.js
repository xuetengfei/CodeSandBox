import React, { useState } from 'react';
import exposure from './exposure';

const fakeArr = n =>
  Array(n)
    .fill(1)
    .map((_, i) => i + 1);

export default function index({ exposureStart }) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  function addElement() {
    // 创建一个新的 div 元素
    let newDiv = document.createElement('div');
    newDiv.setAttribute('data-v', new Date().getTime());
    // 给它一些内容
    let newContent = document.createTextNode('Hi there newDiv!');
    // 添加文本节点 到这个新的 div 元素
    newDiv.appendChild(newContent);

    // 将这个新的元素和它的文本添加到 DOM 中
    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
    setTimeout(function () {
      exposure.add({ el: newDiv });
    }, 0);
  }
  return (
    <div>
      <section>
        <button className="btn" onClick={open}>
          open modal
        </button>
        <button className="btn" onClick={addElement}>
          addElement
        </button>
      </section>
      <section>
        <ul>
          {fakeArr(6).map(v => {
            return (
              <span className="chip" data-v={v} key={v}>
                span-{v}
              </span>
            );
          })}
        </ul>
      </section>
      <section>
        <div className={visible ? 'modal active' : 'modal'}>
          <div className="modal-container">
            <div className="modal-header">
              <a className="btn btn-clear float-right" aria-label="Close" onClick={close}></a>
              <div className="modal-title h5">Modal title</div>
            </div>
            <div className="modal-body">
              <div className="content">
                <p>This Modal DOM is already exists.</p>
                <ul>
                  {fakeArr(30).map(v => {
                    return (
                      <li data-v={`dialog-${v}`} key={v}>
                        {v}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="modal-footer">...</div>
          </div>
        </div>
      </section>
    </div>
  );
}
