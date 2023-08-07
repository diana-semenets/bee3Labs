let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');



menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    //document.body.style.overflow = 'hidden';

   if (menuBtn.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
   }else {
        document.body.style.overflow = '';
   }
})

menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');  
        document.body.style.overflow = '';              
    }
});

//------------slider----------------

const swiper = new Swiper(".swiper", {
    speed: 800,
    slidesPerView: 6,
    spaceBetween: 10,
   // loop:'true',
       

/*    breakpoints: {
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      } */
      
  });


  let accordion = document.querySelector('.faq__card');
  let items = accordion.querySelectorAll('.accordion__item');
  let title = accordion.querySelectorAll('.accordion__title');
  
  function toggleAccordion() {
    let thisItem = this.parentNode;
    
    items.forEach(item => {
      if (thisItem == item ) {
        // if this item is equal to the clicked item, open it.
        thisItem.classList.toggle('active');
        return;
      } 
      // otherwise, remove the open class
      item.classList.remove('active');
    });
  }
  
  title.forEach(question => question.addEventListener('click', toggleAccordion));