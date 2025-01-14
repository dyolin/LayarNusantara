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

//Video Trailer
const videoTrailer = document.getElementById("trailer");
const soundButton = document.getElementById("soundButton");
const soundIcon = document.getElementById("soundIcon");

soundButton.onclick = function(){
    if(videoTrailer.muted){
        videoTrailer.muted = false; //Unmute
        soundIcon.src = "asset/icon/Sound Max.png";;
    }else{
        videoTrailer.muted = true;
        soundIcon.src = "asset/icon/Sound Mute.png";
    }
}
//Video Trailer End

//Reservation
const reserveButton = document.getElementsByClassName("play-button")[0];
const reserveIcon = reserveButton.getElementsByTagName("img")[0];
const reserve = reserveButton.getElementsByTagName("span")[0];

reserveButton.onclick = function(){
    if(reserveButton.classList.contains("reserved")){
        reserveButton.classList.remove("reserved");
        reserveIcon.src = "asset/icon/Reserve Icon.png";
        reserve.textContent = "Reserve";
    }else{
        reserveButton.classList.add("reserved");
        reserveIcon.src = "asset/icon/Reserved Icon.png";
        reserve.textContent = "Reserved";
    }
}
//End of Reservation