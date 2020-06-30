import React, { useEffect, useRef } from 'react';
import loadingPlaceholder from '../loading.svg';
import { observer } from '../observer';

export default function LazyImage(props) {
  const { src, url, alt } = props;
  const ref = useRef(null);

  useEffect(() => {
    observer.observe(ref.current);
  }, []);

  return (
    <>
      <div style={{ marginBottom: '1000px' }}>
        <img
          ref={ref}
          src={src || loadingPlaceholder}
          data-src={url}
          alt={alt || 'a image'}
          className="img-border"
        />
      </div>
    </>
  );
}
