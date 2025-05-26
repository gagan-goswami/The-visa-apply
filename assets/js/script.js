//===hero-section===//

$(".slider-1").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: true,
  dots: true,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    991: {
      items: 1,
    },
  },
});

//===testimonials===//

$(".slider-2").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  dots: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
});

//===top button===//

$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate({ scrollTop: 0 }, 500);
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//===sticky menu bar===//

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

AOS.init();

//===counter===//

$(document).ready(function () {
  $(".counter-value").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");

    $({ Counter: 0 }).animate(
      { Counter: countTo },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now) + "+");
        },
      }
    );
  });
});

//===enquery form===//

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "919971319811"; // Add country code (91 for India)

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });
