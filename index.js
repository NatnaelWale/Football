"use strict";

let teams = [
  {
    code: "DAL",
    name: "Dallas Cowboys",
    plays: "Arlington, TX",
    image:
      "https://m.media-amazon.com/images/I/61-Qpck8IGL._AC_UF894,1000_QL80_.jpg",
  },
  {
    code: "DEN",
    name: "Denver Broncos",
    plays: "Denver, CO",
    image:
      "https://d3hjzzsa8cr26l.cloudfront.net/069c9c16-33ee-11e8-a175-dfc2b12b020e.jpg?zcw=2000&zch=2000&zct=0&zcl=0&pw=264",
  },
  {
    code: "HOU",
    name: "Houston Texans",
    plays: "Houston, TX",
    image:
      "https://1000logos.net/wp-content/uploads/2018/01/Colors-Texans-logo.jpg",
  },
  {
    code: "KAN",
    name: "Kansas City Chiefs",
    plays: "Kansas City, MO",
    image: "https://i.ebayimg.com/images/g/wqkAAOSwsD5jvsDi/s-l1200.webp",
  },
];

let newClearOption = { code: " ", name: "Select a Team", image: " " };
teams.push(newClearOption);

let footballTeamSelect = document.getElementById("teamSelect");
let onClickMeBtn = document.getElementById("btn");
let messageBox = document.getElementById("messageBox");
let imageBox = document.getElementById("imageBox");

window.onload = () => {
  populateTeamsData();
  onClickMeBtn.onclick = onClickMeBtnClicked;
};
function populateTeamsData() {
  // console.log("populate");
  for (let i = 0; i < teams.length; i++) {
    let footBallTeamName = teams[i].name;
    let teamAbbrevation = teams[i].code;
    let newOption = document.createElement("Option");
    newOption.textContent = footBallTeamName;
    newOption.value = teamAbbrevation;
    footballTeamSelect.appendChild(newOption);
  }
}

function onClickMeBtnClicked() {
  let selectedTeamAbbrevation = footballTeamSelect.value;
  let selectedTeamIndex = footballTeamSelect.selectedIndex;
  // console.log(selectedTeamIndex);
  let teamImage = teams[selectedTeamIndex].image;
  //console.log(teamImage);
  for (let i = 0; i < teams.length; i++) {
    let teamCode = teams[i].code;
    let teamName = teams[i].name;
    let teamPlays = teams[i].plays;
    console.log(teamImage);
    if (selectedTeamAbbrevation == " ") {
      messageBox.innerHTML = "";
    } else if (selectedTeamAbbrevation == teamCode) {
      messageBox.innerHTML = `You selected the ${teamName} (${teamCode}) who plays in ${teamPlays}.`;
    }
  }

  // let newImageElement = document.createElement("img");
  // newImageElement.src = teamImage;
  // messageBox.appendChild(newImageElement);

  if(teamImage != " "){
  let imgtag = '<img src="' + teamImage + '" width=300px height=300px>';
  imageBox.innerHTML = imgtag;
} else {
  imageBox.innerHTML = ""
};
}
