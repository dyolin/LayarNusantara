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

//Reservation
const reserveButton = document.getElementsByClassName("reserve-button");

for(let i = 0; i < reserveButton.length; i++){
    const reserveIcon = reserveButton[i].getElementsByTagName("img")[0];
    const reserve = reserveButton[i].getElementsByTagName("span")[0];

    reserveButton[i].onclick = function(){
        if(reserveButton[i].classList.contains("reserved")){
            reserveButton[i].classList.remove("reserved");
            reserveIcon.src = "asset/icon/Reserve Icon.png";
            reserve.textContent = "Reserve";
        }else{
            reserveButton[i].classList.add("reserved");
            reserveIcon.src = "asset/icon/Reserved Icon.png";
            reserve.textContent = "Reserved";
        }
    }
}
//End of Reservation