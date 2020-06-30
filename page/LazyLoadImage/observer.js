function handler(Images, observer) {
  for (const image of Images) {
    if (image.isIntersecting) {
      image.target.src = image.target.dataset.src;
      observer.unobserve(image.target);
    } else {
    }
  }
}

const options = {
  rootMargin: '0px 0px -400px 0px',
};

export const observer = new IntersectionObserver(handler, options);
