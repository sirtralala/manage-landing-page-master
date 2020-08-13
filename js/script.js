
// ********************* SLIDER ********************* //

// Thanks to https://www.w3schools.com/howto/howto_js_slideshow.asp for this slider code!

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonials__testimonial");
    let dots = document.getElementsByClassName("testimonials__dots--dot");

    // jump from last to first testimonial
    if (n > slides.length) {
        slideIndex = 1;
    }

    // jump from first to last testimonial
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // set all testimonials to display:none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // set all dots from active to non-active
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" testimonials__dots--dot-active", "");
    }

    // set current slide to display:block
    slides[slideIndex-1].style.display = "block";
    
    // set current dot to active
    dots[slideIndex-1].className += " testimonials__dots--dot-active";
}

// ********************* END OF SLIDER ********************* //




// ********************* EMAIL VALIDATION ********************* //

function validateEmail() {
    let input = document.querySelector('#inputEmail').value;

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        document.querySelector('#invalidEmail').classList.remove("footer__search--container-active");
        document.querySelector('#inputEmail').classList.remove("footer__search--container-input-invalid");
        document.querySelector('#validEmail').className += " footer__search--container-active";
    }
    else {
        document.querySelector('#validEmail').classList.remove("footer__search--container-active");
        document.querySelector('#invalidEmail').className += " footer__search--container-active";
        document.querySelector('#inputEmail').className += " footer__search--container-input-invalid";
    }
}

// ********************* END OF EMAIL VALIDATION ********************* //




// ********************* MOBILE MENU BACKGROUND & SCROLLING  ********************* //

toggleBodyScrolling = value => {
    document.body.style.position = value;
}

addMobileGradientBackground = () => {
    if (document.querySelector('#gradient')) {
        document.querySelector('#gradient').style.visibility = 'visible';
    }
    else {
        const gradientBackground = document.createElement('div');
        gradientBackground.setAttribute("id", "gradient");
    
        const styles = {
            position: 'absolute',
            top: '0',
            width: '100vw',
            height: '110vh',
            background: 'linear-gradient(to bottom, hsl(233, 12%, 13%, 0), hsl(233, 12%, 13%, 1))',
            visibility: 'visible'
        };
    
        Object.assign(gradientBackground.style, styles);
        document.body.appendChild(gradientBackground);
    }
    toggleBodyScrolling('fixed');
}

removeMobileGradientBackground = () => {
    const gradient = document.querySelector('#gradient');
    gradient.style.visibility = 'hidden';
    toggleBodyScrolling('relative');
}

document.querySelector('#open').addEventListener('click', addMobileGradientBackground);
document.querySelector('#close').addEventListener('click', removeMobileGradientBackground);

// ********************* END OF MOBILE MENU BACKGROUND & SCROLLING  ********************* //