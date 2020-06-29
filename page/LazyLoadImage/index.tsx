import React from 'react';
import loadingPlaceholder from './loading.svg';

export default function index() {
  return (
    <div>
      <img src={loadingPlaceholder} data-src="https://picsum.photos/200/300?random=1" alt="3" />
    </div>
  );
}
