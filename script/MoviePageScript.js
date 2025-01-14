// Dropdown
const dropdown = document.getElementsByClassName("dropdown")[0];
var timeCollapse = null;

const select = dropdown.getElementsByClassName("select")[0];
const arrow = dropdown.getElementsByClassName("arrow")[0];
const menu = dropdown.getElementsByClassName("dropdown-menu")[0]; 
const options = dropdown.getElementsByClassName("dropdown-menu")[0].getElementsByTagName("li"); 

select.onmouseover = function () {
  openDropdown();
};

select.onmouseout = function () {
  closeDropdown();
};

for (let i = 0; i < options.length; i++) {
  let option = options[i];

  option.onmouseover = function () {
    openDropdown();
  };

  option.onmouseout = function () {
    closeDropdown();
  };

  option.onclick = function () {
    arrow.classList.remove("arrow-rotate");
    menu.classList.remove("dropdown-menu-open");
  };
}

function closeDropdown() {
  timeCollapse = setTimeout(function () {
    arrow.classList.remove("arrow-rotate");
    menu.classList.remove("dropdown-menu-open");
  }, 500);
}

function openDropdown() {
  clearTimeout(timeCollapse);
  timeCollapse = null;
  arrow.classList.add("arrow-rotate");
  menu.classList.add("dropdown-menu-open");
}
// Dropdown end

// Poster Banner
// Get the classes and elements
var posterBanner = document.getElementsByClassName("poster-banner")[0];
var posterBannerUl = document.getElementsByClassName("poster-banner")[0].getElementsByTagName("ul")[0];
var posterBannerLi = document.getElementsByClassName("poster-banner")[0].getElementsByTagName("li");

var timerposterBanner = null; //for delay timer

// Duplicate the list to create the scrolling effect
posterBannerUl.innerHTML += posterBannerUl.innerHTML; //double the list
// Adjust ul container width to fit all the items include the duplicated items
posterBannerUl.style.width = posterBannerLi[0].offsetWidth * posterBannerLi.length + "px";

//To Move the Banner
function posterBannerMoving() {
  if (posterBannerUl.offsetLeft < -posterBannerUl.offsetWidth / 2) { // if the original list finished
    // Reset the position once the first set of images has moved out of view
    posterBannerUl.style.left = "0";
  }
  // Move the banner left
  posterBannerUl.style.left = posterBannerUl.offsetLeft - 1 + "px";
}

// Start scrolling automatic
timerposterBanner = setInterval(posterBannerMoving, 2);

// Stop scrolling when mouse enters the banner
posterBanner.onmouseover = function () {
  clearInterval(timerposterBanner);
  timerposterBanner = null;
};

// Start scrolling when mouse leaves the banner
posterBanner.onmouseout = function () {
  timerposterBanner = setInterval(posterBannerMoving, 2);
};
// End of Advertisement Banner
