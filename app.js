const circle = document.querySelector('#circle');

const circle2 = document.querySelector('#circle2');


const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');


closedFace.addEventListener('mouseenter', () => {
    if (openFace.classList.contains('open')) {
      openFace.classList.add('active');
      closedFace.classList.remove('active');
    }
  });


circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});


circle2.addEventListener('mouseenter', () => {
    if (!circle2.classList.contains('hover2')) {
      circle2.classList.add('hover2');
    }
  });
  
  circle2.addEventListener('mouseleave', () => {
    if (circle2.classList.contains('hover2')) {
      circle2.classList.remove('hover2');
    }
  });