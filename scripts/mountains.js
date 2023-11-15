"use strict";
const mountainDrop = document.querySelector("#mountainDrop");
const mountainsTable = document.querySelector("#mountainsTable");
// const mountainCard = document.querySelector("#mountainCard");
const imagesDiv = document.querySelector("#imagesDiv");
const mountainsTableHead = document.querySelector("#mountainsTableHead");




function loadMountainArray() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    mountainDrop.appendChild(option);
  }
}
function loadMountainCard(){
  
}
function loadMountianTable() {
    mountainsTable.innerHTML = "";
    imagesDiv.innerHTML = "";
  const id = mountainDrop.value;
  if (id) {
    mountainsTable.style.display = "block";
    // imagesDiv.style.display = "block";
    mountainsTableHead.style.display= "block";
    document.body.style.backgroundImage = `url('images/${mountainsArray.find(mountain => mountain.name === id).img}')`;
   
  } else {
    mountainsTable.style.display = "none";
    document.body.style.backgroundImage = "none";
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
      
      // let image = document.createElement("img");

      // image.src = `images/${mountain.img}`;

      // image.alt = mountain.name;

      // imagesDiv.appendChild(image);

    }
  }
}

mountainDrop.onchange = loadMountianTable;
loadMountainArray();




