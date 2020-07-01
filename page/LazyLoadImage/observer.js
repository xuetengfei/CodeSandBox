function handler(Images, observer) {
  for (const image of Images) {
    if (image.isIntersecting) {
      const picture = new Image();
      picture.src = image.target.dataset.src;
      picture.onload = function () {
        console.log(`The picture ${image.target.dataset.src} had loaded`);
        image.target.src = picture.src;
        image.target.classList.add('picture-shadow');
      };
      observer.unobserve(image.target);
    } else {
    }
  }
}

const options = {
  rootMargin: '0px 0px -400px 0px',
};

export const observer = new IntersectionObserver(handler, options);
