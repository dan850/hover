const circle = document.querySelector('.circle');

const circle2 = document.querySelector('.circle2');


const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const closedFace2 = document.querySelector('.closed2');
const openFace2 = document.querySelector('.open2');


closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
    circle.classList.add('hover');

  }

});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
    circle.classList.remove('hover');

  }
});

  

closedFace2.addEventListener('click', () => {
    if (openFace2.classList.contains('open2')) {
      openFace2.classList.add('active2');
      closedFace2.classList.remove('active2');
    }

  });
  openFace2.addEventListener('click', () => {
    if (closedFace2.classList.contains('closed2')) {
      closedFace2.classList.add('active2');
      openFace2.classList.remove('active2');
      
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