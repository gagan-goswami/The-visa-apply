// hero-section //

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

$(".slider-3").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 2,
    },
    991: {
      items: 5,
    },
  },
});

$(".slider-4").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

$(".slider-5").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  padding: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

//  top button  //

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

// sticky menu bar //

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

// JavaScript
// counter

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

// titl animation //

AOS.init();

// Select the custom cursor element
const customCursor = document.querySelector(".custom-cursor");

// Update cursor position on mouse move
document.addEventListener("mousemove", (event) => {
  const x = event.clientX; // X-coordinate relative to the viewport
  const y = event.clientY; // Y-coordinate relative to the viewport

  // Move the cursor to the mouse's current position
  customCursor.style.left = `${x}px`;
  customCursor.style.top = `${y}px`;
});

// tilt //

/* Store the element in el */
let el = document.getElementById("tilt");

/* Get the height and width of the element */
const height = el.clientHeight;
const width = el.clientWidth;

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener("mousemove", handleMove);

/* Define function a */
function handleMove(e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX;
  /* Store the y position */
  const yVal = e.layerY;

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 20 * ((xVal - width / 2) / width);

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

/* Add listener for mousedown event, to simulate click */
el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});

// tilt animation //

$(".js-tilt").tilt({
  maxTilt: 15,
  speed: 300,
  axis: "x", // Tilt only on the x-axis
  glare: true, // Add a glare effect
  maxGlare: 0.3,
});

// enquery form //

function sendToWhatsApp() {
  var phone = "+917065559517";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNum = document.getElementById("phone").value;
  var company = document.getElementById("company").value;
  var location = document.getElementById("location").value;
  var service = document.getElementById("service").value;
  var projectType = document.getElementById("projectType").value;
  var projectSize = document.getElementById("projectSize").value;
  var message = document.getElementById("message").value;
  var urgency = document.getElementById("urgency").value;

  var url = `https://api.whatsapp.com/send?phone=${phone}&text=
      Full Name: ${name}%0A
      Email: ${email}%0A
      Phone: ${phoneNum}%0A
      Company: ${company}%0A
      Location: ${location}%0A
      Service Interested In: ${service}%0A
      Project Type: ${projectType}%0A
      Project Size: ${projectSize}%0A
      Message: ${message}%0A
      Urgency Level: ${urgency}`;

  window.open(url, "_blank");
}
