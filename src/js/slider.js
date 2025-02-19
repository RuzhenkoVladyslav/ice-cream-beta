const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 500,

  effect: 'flip',

  flipEffect: {
    sladeShadows: true,
    limitRotation: true,
  },
});
