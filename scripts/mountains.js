"use strict";
const mountainDrop = document.querySelector("#mountainDrop");
const mountainsTable = document.querySelector("#mountainsTable");

function loadMountainArray() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    mountainDrop.appendChild(option);
  }
}
function loadMountianTable() {
    mountainsTable.innerHTML = "";
  const id = mountainDrop.value;
  if (id) {
    mountainsTable.style.display = "block";
  } else {
    mountainsTable.style.display = "none";
  }

  for (const mountain of mountainsArray) {
    if (mountain.name == id) {
      let row = mountainsTable.insertRow(-1);
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

mountainDrop.onchange = loadMountianTable;
loadMountainArray();




