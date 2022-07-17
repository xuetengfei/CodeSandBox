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
    check_PerformanceEntries();
  }

  function log_sizes(perfEntry) {
    // Check for support of the PerformanceEntry.*size properties and print their values
    // if supported.
    if ('encodedBodySize' in perfEntry)
      console.log('encodedBodySize = ' + perfEntry.encodedBodySize);
    else console.log('encodedBodySize = NOT supported');
  }
  function check_PerformanceEntries() {
    // Use getEntriesByType() to just get the "resource" events
    const p = performance.getEntriesByType('resource');
    for (let i = 0; i < p.length; i++) {
      log_sizes(p[i]);
    }
  }

  function t3() {
    const originImages = Array.from(document.getElementsByTagName('img'));
    function getProperty(name) {
      const originImage = originImages.find(x => x.src === name);
      const { offsetWidth, offsetHeight, naturalWidth, naturalHeight } = originImage;
      return { offsetWidth, offsetHeight, naturalWidth, naturalHeight };
    }
    const resource = performance
      .getEntriesByType('resource')
      .filter(v => v.initiatorType === 'img')
      .map(v => ({
        name: v.name,
        fileSize: Math.round(v.transferSize / Math.pow(10, 3)) + 'kb',
        time: Math.round(v.responseEnd - v.requestStart) + 'ms',
        ...getProperty(v.name),
      }));
    console.log('ans getEntries resource', resource);

    const ans = resource.reduce((acc, cur) => {
      const { name, ...rest } = cur;
      acc[name] = rest;
      return acc;
    }, {});
    console.table(ans);
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
            {/* <div className="column col-6">
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
            </div> */}
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
        <div style={{ marginBottom: '10px' }}>
          <button className="btn btn-primary" onClick={t3}>
            performance.getEntriesByType('resource')
          </button>
        </div>
      </section>
    </div>
  );
}

/* 
[初探 performance – 监控网页与程序性能 | AlloyTeam](http://www.alloyteam.com/2015/09/explore-performance/) 

[Assessing loading performance in the field with Navigation Timing and Resource Timing](https://web.dev/navigation-and-resource-timing/) 
[页面加载性能之感知真实世界 - SegmentFault 思否](https://segmentfault.com/a/1190000023288359) 



transferSize 表示资源传输总大小，包含header
encodedBodySize 表示压缩之后的body大小
decodedBodySize 表示解压之后的body大小


// HTTP header size
var pageNav = performance.getEntriesByType("navigation")[0];
var headerSize = pageNav.transferSize - pageNav.encodedBodySize;

// Compression ratio
var compressionRatio = pageNav.decodedBodySize / pageNav.encodedBodySize;

Request time only (excluding unload, redirects, DNS, and connection time)
var requestTime = pageNav.responseStart - pageNav.requestStart;
Response time only (download)
var responseTime = pageNav.responseEnd - pageNav.responseStart;
Request + response time
var requestResponseTime = pageNav.responseEnd - pageNav.requestStart;

connectEnd: 914.1999999992549
connectStart: 914.1999999992549
decodedBodySize: 105953
domainLookupEnd: 914.1999999992549
domainLookupStart: 914.1999999992549
duration: 3001.4000000003725
encodedBodySize: 105953
entryType: "resource"
fetchStart: 914.1999999992549
initiatorType: "img"
name: "https://ncdn.camarts.cn/cac94694.jpg"
nextHopProtocol: "h2"
redirectEnd: 0
redirectStart: 0
requestStart: 1906
responseEnd: 3915.5999999996275
responseStart: 3819.5999999996275
secureConnectionStart: 914.1999999992549
serverTiming: []
startTime: 914.1999999992549
transferSize: 106253
workerStart: 0


*/
