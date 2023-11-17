const parksByLocationRadio = document.querySelector("#parksByLocationRadio");
const parksByTypeRadio = document.querySelector("#parksByTypeRadio");
const allParksRadio = document.querySelector("#allParksRadio");
const parksByLocationDrop = document.querySelector("#parksByLocationDrop");
const parksByLocationTableBody = document.querySelector("#parksByLocationTableBody");
const parksByTypeDrop = document.querySelector("#parksByTypeDrop");
const parksByTypeTableBody = document.querySelector("#parksByTypeTableBody");
const parksByLocationTable = document.querySelector("#parksByLocationTable");
const parksByTypeTable = document.querySelector("#parksByTypeTable");
const parksByLocationLabel = document.querySelector("#parksByLocationLabel");
const parksByTypeLabel = document.querySelector("#parksByTypeLabel");


//---------------- toggle buttons--------------
function toggleParkByLocationDrop() {
  if (parksByLocationRadio.checked) {
    parksByLocationLabel.style.display = "block";
    parksByLocationDrop.style.display = "block";
    parksByTypeLabel.style.display = "none";
    parksByTypeDrop.style.display = "none";
    parksByTypeTable.style.display = "none";
  }
}
parksByLocationRadio.onclick = toggleParkByLocationDrop;

function toggleParkByTypeDrop() {
  if (parksByTypeRadio.checked) {
    parksByTypeLabel.style.display = "block";
    parksByTypeDrop.style.display = "block";
    parksByLocationLabel.style.display = "none";
    parksByLocationDrop.style.display = "none";
    parksByLocationTable.style.display = "none";
   
  }
}
parksByTypeRadio.onclick = toggleParkByTypeDrop;

// ----------------show all parks toggle-------------------

function showAllParks() {
  parksByLocationTableBody.innerHTML = "";
  for (const nationalPark of nationalParksArray) {
    if (allParksRadio.checked) {
      parksByLocationTable.style.display = "block";
      parksByLocationDrop.style.display = "none";
      parksByTypeDrop.style.display = "none";
      parksByLocationLabel.style.display = "none";
      parksByTypeLabel.style.display = "none";
    } else {
      parksByLocationTable.style.display = "none";
      
    }
    let row = parksByLocationTableBody.insertRow(-1);
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
    let cell9 = row.insertCell(8);
    cell9.innerText = nationalPark.Latitude;
    let cell10 = row.insertCell(9);
    cell10.innerText = nationalPark.Longitude;
    let cell11 = row.insertCell(10);
    if (nationalPark.Visit) {
      let link = document.createElement("a");
      link.innerText = "Visit Website";
      link.href = nationalPark.Visit;
      link.target = "_blank";
      cell11.appendChild(link);
    }
  
  }
}

allParksRadio.onclick = showAllParks;


//--------------- load location table----------------

function loadLocationArray() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    parksByLocationDrop.appendChild(option);
  }
}

function loadParkTable() {
  parksByLocationTableBody.innerHTML = "";

  const id = parksByLocationDrop.value;

  if (id) {
    parksByLocationTable.style.display = "block";

    
  } else {
    parksByLocationTable.style.display = "none";
  }

  for (const nationalPark of nationalParksArray) {
    if (nationalPark.State == id) {
      let row = parksByLocationTableBody.insertRow(-1);
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
      let cell9 = row.insertCell(8);
      cell9.innerText = nationalPark.Latitude;
      let cell10 = row.insertCell(9);
      cell10.innerText = nationalPark.Longitude;
      let cell11 = row.insertCell(10);
      if (nationalPark.Visit) {
        let link = document.createElement("a");
        link.innerText = "Visit Website";
        link.href = nationalPark.Visit;
        link.target = "_blank";
        cell11.appendChild(link);
        
      }
  }
}
  }

parksByLocationDrop.onchange = loadParkTable;
loadLocationArray();



//---------------load type table------------------


function loadTypeArray() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = parkType;
    parksByTypeDrop.appendChild(option);
  }
}

function loadParkTypeTable() {
  parksByTypeTableBody.innerHTML = "";
  const type = parksByTypeDrop.value.toLowerCase();

  let parkFilter = nationalParksArray.filter((e) => e.LocationName.toLowerCase().includes(type.toLowerCase()));

  if (type) {
    parksByTypeTable.style.display = "block";
    
    
  } else {
    parksByTypeTable.style.display = "none";
  }
  for (const nationalPark of parkFilter) {
    let row = parksByTypeTableBody.insertRow(-1);
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
    let cell9 = row.insertCell(8);
    cell9.innerText = nationalPark.Latitude;
    let cell10 = row.insertCell(9);
    cell10.innerText = nationalPark.Longitude;
    if (nationalPark.Visit) {
      let link = document.createElement("a");
      let cell11 = row.insertCell(10);
      link.href = nationalPark.Visit;
      link.innerText = "Visit Website!";
      link.target= "_blank"
      cell11.appendChild(link);
    }
  }
}
parksByTypeDrop.onchange = loadParkTypeTable;
loadTypeArray();
