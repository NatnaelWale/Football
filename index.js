"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

let footballSelect = document.getElementById("footballSelect");
let onClickMeBtn = document.getElementById("btn");
let messageBox1 = document.getElementById("messageBox1");
let messageBox2 = document.getElementById("messageBox2");
let messageBox3 = document.getElementById("messageBox3");

window.onload = () => {
  populateTeamsData();
  onClickMeBtn.onclick = onClickMeBtnClicked;
};
function populateTeamsData() {
    // let i;
    // let plays = teams[i].plays;
    // console.log(plays)
  console.log("populate");
  for (let i = 0; i < teams.length; i++) {
    let footBallTeamName = teams[i].name;
    let teamAbbrevation = teams[i].code;
    let newOption = document.createElement("Option");
    newOption.textContent = footBallTeamName;
    newOption.value = teamAbbrevation;
    footballSelect.appendChild(newOption);
  };
};

function onClickMeBtnClicked() {
  let selectedTeamAbbrevation = footballSelect.value;
//   console.log(selectedTeamPlays);
//   if (selectedTeamAbbrevation != "") {
//     messageBox.innerHTML = selectedTeamAbbrevation;
//   } else console.log(`You haven't selected no team!`);

for(let i = 0; i < teams.length; i++){
  let checkTeamCode = teams[i].code;
  let teamName = teams[i].name;
  let teamPlays = teams[i].plays;
  if(selectedTeamAbbrevation == checkTeamCode){
    messageBox1.innerHTML = `Team Name: ${teamName}`
    messageBox2.innerHTML = `Team Code: ${selectedTeamAbbrevation}` 
    messageBox3.innerHTML =  `Team Plays in: ${teamPlays}`
  } else {
    `You haven't selected no team. Please Select one.`
  }
}
}
