import React, { useState, useEffect } from 'react';
import './index.less';

export default function TestPerformance() {
  function t1() {
    const ans = window.performance;
    console.log('ans performance', ans);
  }

  function t2() {
    const ans = window.performance.getEntries();
    console.log('ans getEntries', ans);
  }
  return (
    <div>
      <h1>window.performance</h1>
      <section>
        <div className="container">
          <div className="columns">
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/edd99a70.jpg" alt="camarts" />
            </div>
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/dfb4a4ba.jpg" alt="camarts" />
            </div>
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/427bdd42.jpg" alt="camarts" />
            </div>
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/b83934f5.jpg" alt="camarts" />
            </div>
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/3fc91645.jpg" alt="camarts" />
            </div>
            <div className="column col-6">
              <img src="https://ncdn.camarts.cn/cac94694.jpg" alt="camarts" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={{ marginBottom: '10px' }}>
          <button className="btn btn-success" onClick={t1}>
            window.performance
          </button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button className="btn btn-primary" onClick={t2}>
            window.performance.getEntries
          </button>
        </div>
      </section>
    </div>
  );
}

/* 
[初探 performance – 监控网页与程序性能 | AlloyTeam](http://www.alloyteam.com/2015/09/explore-performance/) 
*/
