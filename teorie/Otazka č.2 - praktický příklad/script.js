// fixed navigation

let nav = document.querySelector('nav');
let navTop = nav.offsetTop;

window.addEventListener('scroll', function() {

    if(window.scrollY >= navTop) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
})

// (jQuery) smooth scroll 

$('nav ul li a').on('click', function(e) {
    e.preventDefault();
    if( this.hash != '');

    const hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 51
    }, 750)
})

$('#section-1 p a').on('click', function(e) {
    e.preventDefault();
    if( this.hash != '');

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 51
    }, 750)
})

// gallery

let thumbs = document.querySelectorAll('.gallery-wrapper .gallery-img img');
let modal = document.querySelector('.modal');
let fullSizeImg = document.querySelector('.full-size-img');

thumbs.forEach( thumb => {
    thumb.addEventListener('click', function() {
        modal.classList.add('open');
        fullSizeImg.classList.add('open');

        fullSrc = thumb.getAttribute('data-original');
        fullSizeImg.src = `./img/${fullSrc}`;
    })
})

modal.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        fullSizeImg.classList.remove("open");
    }
})



