// SHOW MENU BAR 

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show-menu');
});

// AOS JS ANIMATION 

AOS.init();

// PORTFOLIO CATEGORY BTNS 

const cateButtons = document.querySelectorAll('.portfolio-tab-btns li');

cateButtons.forEach(cateBtn =>{
    cateBtn.addEventListener('click',() =>{
        cateButtons.forEach(btn => btn.classList.remove('active-btn'));

        cateBtn.classList.add('active-btn');
    });
});


// PORTFOLIO MIXITUP 

var mixer = mixitup('.portfolio');


// SERVICES SWIPER 

var swiper = new Swiper('.serviceSwiper',{
    slidesPerView: 3,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    breakpoints:{
        1400:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 3,
        },
        900:{
            slidesPerView: 2,
        },
        500:{
            slidesPerView: 1,
        },
        0:{
            slidesPerView: 1,
        },
    },
})


// FAQS SECTION 

const faqCols= document.querySelectorAll('.faq-col');

faqCols.forEach(faqCol =>{
    faqCol.addEventListener('click',() =>{

        const openFaq = document.querySelector('.faq-col.show-ans');
        if(openFaq && openFaq !== faqCol){
            openFaq.classList.remove('show-ans');
            openFaq.querySelector('.ans').classList.remove('show-ans-text');
            const openIcon = openFaq.querySelector('.faq-head i');
            openIcon.classList.remove('ri-subtract-fill', 'active-faq-icon');
            openIcon.classList.add('ri-add-fill');
        }

        const answer = faqCol.querySelector('.ans');
        const icon = faqCol.querySelector('.faq-head i');
        const isOpen = faqCol.classList.toggle('show-ans');
        answer.classList.toggle('show-ans-text', isOpen);

        icon.classList.toggle('ri-add-fill', !isOpen);
        icon.classList.toggle('ri-subtract-fill', isOpen);
        icon.classList.toggle('active-faq-icon', isOpen);
    });
});

// Testimonials 

var swiper = new Swiper('.testSwiper',{
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    autoplay:true,
})