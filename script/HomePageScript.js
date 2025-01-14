// Dropdown
// Select the classes
const dropdown = document.getElementsByClassName("dropdown")[0];
var timeCollapse = null; //timer for delay before dropdown disappears

const select = dropdown.getElementsByClassName("select")[0];
const arrow = dropdown.getElementsByClassName("arrow")[0];
const menu = dropdown.getElementsByClassName("dropdown-menu")[0]; 
const options = dropdown.getElementsByClassName("dropdown-menu")[0].getElementsByTagName("li"); 

// When the "Category" word is hover
select.onmouseover = function () {
  openDropdown();
};

// When mouse goes from "Category" word
select.onmouseout = function () {
  closeDropdown();
};

//For each of the category menu
for (let i = 0; i < options.length; i++) {
  let option = options[i];

  // When the inside menu is hover
  option.onmouseover = function () {
    openDropdown();
  };

  // When mouse goes from the inside menu
  option.onmouseout = function () {
    closeDropdown();
  };

  // When the category menu is clicked
  option.onclick = function () {
    arrow.classList.remove("arrow-rotate"); //arrow rotate back to default
    menu.classList.remove("dropdown-menu-open"); //dropdown menu is closed
  };
}

//Close dropdown when the mouse gone
function closeDropdown() {
  timeCollapse = setTimeout(function () {
    arrow.classList.remove("arrow-rotate"); //rotate arrow back to default
    menu.classList.remove("dropdown-menu-open"); //close the dropdown
  }, 500); //500 ms delay before closing
}

function openDropdown() {
  clearTimeout(timeCollapse); //delete the time, so the dropdown keeps on opening
  timeCollapse = null;
  arrow.classList.add("arrow-rotate"); //rotate the arrow
  menu.classList.add("dropdown-menu-open"); //show the dropdown menu
}
// Dropdown end

// Carousel
// Get the elements and classes
const carousel = document.getElementsByClassName("carousel")[0];
const carouselWrap = document.getElementsByClassName("carousel-image")[0];
const carouselImages = document.getElementsByClassName("carousel-image")[0].getElementsByTagName("img");
const carouselNav = document.getElementsByClassName("carousel-nav")[0].getElementsByTagName("button");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentSlide = 0; //to keep track for the current slide. Now is the first slide
let timeUpdate = 0; //timer for delay before slide transition

function updateCarousel() {
  for(let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].classList.remove("active-image"); //remove active-image class in all of the carousel images
  };

  carouselImages[currentSlide].classList.add("active-image"); //add active-image only to the current Slide

  //Carousel Navigation Active
  for(let i = 0; i < carouselNav.length; i++) {
    carouselNav[i].classList.remove("active-slider"); //remove all the active-slider class in navigation dot button
    if (i === currentSlide) {
      carouselNav[i].classList.add("active-slider"); //add active-slider class only to the current slide button
    }
  };
}

//Automatic Slide Transition
function swipeSlide() {
  if (currentSlide < carouselImages.length - 1) { //if the current slide is not the last slide
    currentSlide++;
  } else { //if the current slide is the last slide
    currentSlide = 0; //current slide back to the first slide
  }
  updateCarousel(); //update which image should be displayed
}

//Click on previous button
previousButton.onclick = function() {
  clearInterval(timeUpdate); //restart the timer
  if (currentSlide > 0) { //if the current slide is not the first slide
    currentSlide--; //move to the previous slide
  } else { //if it is the first slide
    currentSlide = carouselImages.length - 1; //move to the last slide
  }
  updateCarousel(); //update which image should be displayed
  timeUpdate = setInterval(swipeSlide, 5000); //reset the timer to 5 seconds
};

//Click on next button
nextButton.onclick = function() {
  clearInterval(timeUpdate); //restart the timer
  timeUpdate = 0;

  if (currentSlide < carouselImages.length - 1) { //if the current slide is not the last slide
    currentSlide++; //move to the next slide
  } else { //if it is the last slide
    currentSlide = 0; //move to the first slide
  }
  updateCarousel(); //update which image should be displayed
  timeUpdate = setInterval(swipeSlide, 5000); //reset the timer to 5 seconds
};

timeUpdate = setInterval(swipeSlide, 5000); //automatically swipe slide every 5 seconds
// End of Carousel

// Advertisement Banner
var banner = document.getElementsByClassName("banner")[0];
var bannerUl = document.getElementsByClassName("banner")[0].getElementsByTagName("ul")[0];
var bannerLi = document.getElementsByClassName("banner")[0].getElementsByTagName("li");

var timerBanner = null;

// Duplicate the list to create the scrolling effect
bannerUl.innerHTML += bannerUl.innerHTML;
bannerUl.style.width = bannerLi[0].offsetWidth * bannerLi.length + "px"; // Adjust width to include duplicate items

function bannerMoving() {
  if (bannerUl.offsetLeft < -bannerUl.offsetWidth / 2) {
    bannerUl.style.left = "0"; // Reset the position once the first set of images has moved out of view
  }
  bannerUl.style.left = bannerUl.offsetLeft - 1 + "px"; // Move the banner left
}

// Start scrolling automatic
timerBanner = setInterval(bannerMoving, 5);

// Stop scrolling when mouse enters the banner
banner.onmouseover = function () {
  clearInterval(timerBanner);
  timerBanner = null;
};

// Start scrolling when mouse leaves the banner
banner.onmouseout = function () {
  timerBanner = setInterval(bannerMoving, 5);
};
// End of Advertisement Banner