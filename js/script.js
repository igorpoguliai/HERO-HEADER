let body = document.getElementById('body'); 

// BURGER
let burger = document.getElementById('burger'); 
let navigation = document.getElementById('navigation');

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
    body.classList.toggle('no-scroll')
})
var burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('open');  
})
// END BURGER

// SCROLLING
let scrolling = document.getElementById('scrolling')
let secondSection = document.getElementById('second-section')

scrolling.addEventListener('click', function() {
    secondSection.scrollIntoView({behavior: "smooth"});
})
// END SCROLLING

// MODAL
let modal = document.getElementById('modal')
let closeModal = document.getElementById('close-modal')
let playVideo = document.getElementById('play-video')

playVideo.addEventListener('click', function() {
  modal.style.display = 'flex'
})

closeModal.addEventListener('click', function() {
  modal.style.display = 'none'
})
// END MODAL
