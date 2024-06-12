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

intervalId = setInterval(() => {
  currentScroll += 350;
  scrollRight.scrollTo(currentScroll, 0);
  if (currentScroll >= slider.scrollWidth) {
   
    currentScroll = -350;
  }
},3000)



/* let slideIndex = 0;

initSlide()
function initSlide() {
  let i;
  let slides = document.querySelectorAll('.slides');
 
  let index; 
  
  for (i = 0; i < slides.length; i++) {

    index =slides[i]
  

    index.style.display = 'none';
  
    
  }
  slideIndex ++;

  if (slideIndex >= slides.length) {
    slideIndex = 1;
    index.style.left = '-20%';
  };

 

slides[slideIndex-1].style.display = 'block';


 setTimeout(initSlide, 6000);

};



 */