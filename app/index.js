const hamBtn = document.querySelector('.js-btn-cont');
const hamDrop = document.querySelector('.ul-wrapper');
const overlay = document.querySelector('.overlay');
const cancleham = document.querySelector('.ic');



function hamDrops() {
    overlay.classList.toggle('appear');
  } 
  
  hamBtn.addEventListener('click', hamDrops);


cancleham.addEventListener('click', ()=> {
  overlay.classList.add('disappear');
});





const slider = document.querySelector('.slider');

let currentScroll = 0;
let intervalId;
const scrollRight = document.querySelector('.slider');

const mediaQuery1 = window.matchMedia("(max-width:  47.93em)")
if (mediaQuery1.matches) {
  intervalId = setInterval(() => {
    currentScroll += 350;
    scrollRight.scrollTo(currentScroll, 0);
    if (currentScroll >= slider.scrollWidth) {
     
      currentScroll = -350;
    }
  },3000)
  
} else {
  ''
}

let slideIndex = 0;
const mediaQuery = window.matchMedia("(min-width: 47.94em)");
currentScroll = 0;

if (mediaQuery.matches) {
  initSlide()
function initSlide() {

  let i;
  let slides = document.querySelectorAll('.slides');
 
  let index; 
  
  for (i = 0; i < slides.length; i++) {

    index = slides[i];
  

    index.style.display = 'none';
  
    
  }
  slideIndex ++;

  if (slideIndex >= slides.length) {
    slideIndex = 1;
  };

 

slides[slideIndex-1].style.display = 'block';


 setTimeout(initSlide, 6000);

};

}