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

// Play Video
const mainVideo = document.getElementById("mainVideo");
const episodeButton = document.getElementsByClassName("episode-number");
const hash = window.location.hash;
/*
window.location.hash is to take the #id in the URL
window.location is the URL usually in the href=""
.hash is to take the id, the content will be #the-id

Example: in the details page, the link for the episode is: <a href="Antares_WatchPage.html#episode-1A">
With this way, it will go to the Antares_WatchPage.html and find #episode-1A
*/
let activeEpisode = 0;

for(let i = 0; i < episodeButton.length; i++){
  //Click episode button
  episodeButton[i].onclick = function(){
    playVideo(i);
    //play video based on the clicked episode
  }

  //Click episode from the Details Page
  //If the id in the episode-number the same with the hash found in the URL from Details Page
  if(episodeButton[i].id === hash.substring(1)){
    playVideo(i); //Play the video based on the clicked episode
  }
}

function playVideo(index){
  episodeButton[activeEpisode].classList.remove("active-episode"); //remove the active-episode class from the currentEpisode button
  episodeButton[index].classList.add("active-episode"); //add the active-episode class to the selected episode
  activeEpisode = index; //change the value to the new episode

  const videoSource = episodeButton[activeEpisode].getAttribute("data-video"); //get the source video attached to selected button
  mainVideo.setAttribute("src", videoSource); //change the src attribute value from the mainVideo
}
// End of Play Video

// Submit Alert
const submitComment = document.getElementById("submitComment");
submitComment.onclick = function(){
  alert("Thank You for Your Comment!");
}
// End of Submit Alert

// Cancel Form
const cancelComment = document.getElementById("cancelComment");
const reactions = document.getElementsByName("freact");
cancelComment.onclick = function(){
  document.getElementById("fname").value="";
  document.getElementById("fcomment").value="";

  for(let i = 0; i<reactions.length; i++){
    reactions[i].checked = false;
  }

  alert("Comment Is Cancelled!");
}
// End of Cancel Form