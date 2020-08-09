// my profile animation
const words = ["Ashwani.", "a Web Developer.", "a UI Developer."];

let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat: -1});

let boxTl = gsap.timeline();
boxTl.to('.box', {duration: 1, width: "11vw", 
delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y: "7vw", ease: "power3.out", onComplete:()=>masterTl.play()})
.to('.box', {duration:1, ease: "elastic.out"});

let masterTl = gsap.timeline({repeat: -1,}).pause();

words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl);
})


$(function () {
  
  var link = $('#navbar a.nav-link-item');
  // Move to specific section when click on menu link
  link.on('click', function (e) {
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600);
    $(this).addClass('active');
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on('scroll', function () {
    scrNav();
  });

  // scrNav function 
  // Change active nav-link according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('section').each(function () {
      var id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();
});

// Menu Animation.
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    header.classList.add('header-show');
    menuOpen = true;
  }
  else {
    header.classList.remove('header-show');
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Skillbar Animation.
$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css('width', per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1500,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue));
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});

const mainContent = document.querySelector('.main-content');
mainContent.addEventListener('click', () => {
  if (menuOpen) {
    header.classList.remove('header-show');
    menuBtn.classList.remove('open');
    menuOpen = false
  }
})
