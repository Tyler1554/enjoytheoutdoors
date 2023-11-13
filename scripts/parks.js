const parksByLocationRadio = document.querySelector("#parksByLocationRadio");
const parksByTypeRadio = document.querySelector("#parksByTypeRadio");
const parksByLocationDrop = document.querySelector("#parksByLocationDrop");
const parksByLocationTable = document.querySelector("#parksByLocationTable");
const parksByTypeDrop = document.querySelector("#parksByTypeDrop");
const parksByTypeTable = document.querySelector("#parksByTypeTable");

function loadLocationArray() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    parksByLocationDrop.appendChild(option);
  }
}

function loadParkTable() {
  parksByLocationTable.innerHTML = "";

  const id = parksByLocationDrop.value;

  if (id) {
    parksByLocationTable.style.display = "block";
  } else {
    parksByLocationTable.style.display = "none";
  }

  for (const nationalPark of nationalParksArray) {
    if (nationalPark.State == id) {
      let row = parksByLocationTable.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = nationalPark.LocationID;
      let cell2 = row.insertCell(1);
      cell2.innerText = nationalPark.LocationName;
      let cell3 = row.insertCell(2);
      cell3.innerText = nationalPark.Address;
      let cell4 = row.insertCell(3);
      cell4.innerText = nationalPark.City;
      let cell5 = row.insertCell(4);
      cell5.innerText = nationalPark.State;
      let cell6 = row.insertCell(5);
      cell6.innerText = nationalPark.ZipCode;
      let cell7 = row.insertCell(6);
      cell7.innerText = nationalPark.Phone;
      let cell8 = row.insertCell(7);
      cell8.innerText = nationalPark.Fax;
      let cell9 = row.insertCell(6);
      cell9.innerText = nationalPark.Latitude;
      let cell10 = row.insertCell(7);
      cell10.innerText = nationalPark.Longitude;
    }
  }
}

parksByLocationDrop.onchange = loadParkTable;
loadLocationArray();

function loadTypeArray() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = parkType;
    parksByTypeDrop.appendChild(option);
  }
}

function loadParkTypeTable() {
  parksByTypeTable.innerHTML = "";
  const type = parksByTypeDrop.value.toLowerCase();

  let parkFilter = nationalParksArray.filter((e) => e.LocationName.toLowerCase().includes(type.toLowerCase()));

  if (type) {
    parksByTypeTable.style.display = "block";
  } else {
    parksByTypeTable.style.display = "none";
  }
  for (const nationalPark of parkFilter) {
    let row = parksByTypeTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = nationalPark.LocationID;
    let cell2 = row.insertCell(1);
    cell2.innerText = nationalPark.LocationName;
    let cell3 = row.insertCell(2);
    cell3.innerText = nationalPark.Address;
    let cell4 = row.insertCell(3);
    cell4.innerText = nationalPark.City;
    let cell5 = row.insertCell(4);
    cell5.innerText = nationalPark.State;
    let cell6 = row.insertCell(5);
    cell6.innerText = nationalPark.ZipCode;
    let cell7 = row.insertCell(6);
    cell7.innerText = nationalPark.Phone;
    let cell8 = row.insertCell(7);
    cell8.innerText = nationalPark.Fax;
    let cell9 = row.insertCell(6);
    cell9.innerText = nationalPark.Latitude;
    let cell10 = row.insertCell(7);
    cell10.innerText = nationalPark.Longitude;
  }
}
parksByTypeDrop.onchange = loadParkTypeTable;
loadTypeArray();
