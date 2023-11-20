"use strict";
const mountainDrop = document.querySelector("#mountainDrop");
const mountainsTable = document.querySelector("#mountainsTable");
const imagesDiv = document.querySelector("#imagesDiv");
const mountainsTableBody = document.querySelector("#mountainsTableBody");
const blackBar = document.querySelector(".black-bar");




function loadMountainArray() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    mountainDrop.appendChild(option);
  }
}




function loadMountianTable() {
  mountainsTableBody.innerHTML = "";
  imagesDiv.innerHTML = "";
  const id = mountainDrop.value;
  if (id) {
    mountainsTable.style.display = "block";
    blackBar.style.display= "block";
    document.body.style.backgroundImage = `url('images/${
      mountainsArray.find((mountain) => mountain.name === id).img
    }')`;
  } else {
  
    mountainsTable.style.display = "none";
    document.body.style.backgroundImage = "none";
  }
  for (const mountain of mountainsArray) {
    if (mountain.name == id) {
      let row = mountainsTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = mountain.name;
      let cell2 = row.insertCell(1);
      cell2.innerText = mountain.elevation;
      let cell3 = row.insertCell(2);
      cell3.innerText = mountain.effort;
      let cell4 = row.insertCell(3);
      cell4.innerText = mountain.desc;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  mountainDrop.addEventListener("change", function () {
    let titles = document.querySelectorAll("h1");
    titles.forEach((title) => {
      title.style.display = mountainDrop.value ? "none" : "block";
    });
  });
});

mountainDrop.onchange = loadMountianTable;
loadMountainArray();
