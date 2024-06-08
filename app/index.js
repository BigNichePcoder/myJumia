const hamBtn = document.querySelector('.js-btn-cont');
const ulHam = document.querySelector('.js-ham-ul')

hamBtn.addEventListener('click', ()=> {
  hamBtn.style.background = 'green';
  console.log(ulHam.classList.add('show'));
})