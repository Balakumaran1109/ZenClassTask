let form = document.getElementById("form");
let table = document.getElementById("tableData");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let food = document.querySelectorAll("input[name='food']:checked");

  let foodArray = Array.from(food).map((element) => element.value);

  if(foodArray.length<2){
    alert("Must choose atleast 2 food options")
    return
  }
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;

  let newRow = table.insertRow();
  let firstNameCol = newRow.insertCell();
  let lastNameCol = newRow.insertCell();
  let addressCol = newRow.insertCell();
  let pincodeCol = newRow.insertCell();
  let genderCol = newRow.insertCell();
  let foodCol = newRow.insertCell();
  let cityCol = newRow.insertCell();
  let countryCol = newRow.insertCell();

  firstNameCol.textContent = firstName;
  lastNameCol.textContent = lastName;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodArray.join(", ");
  cityCol.textContent = city;
  countryCol.textContent = country;

     form.reset();
});
