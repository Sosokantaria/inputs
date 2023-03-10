const maleInput = document.querySelector("#maleInput");
const femaleInput = document.querySelector("#femaleInput");
const add = document.querySelector("#addButton");
const firstAndLastNamesInput = document.querySelector(
  "#firstnameAndLastnameInput"
);
const sexInput = document.querySelector(".sexInput");
const addressInput = document.querySelector("#addressInput");
const ageInput = document.querySelector("#ageInput");
const contactCards = document.querySelector(".contact-cards");
const allInputs = document.querySelectorAll(".inputs");
sexInput.value = "";

function maleOrFemale() {
  maleInput.addEventListener("click", () => {
    if (femaleInput.checked) {
      femaleInput.checked = false;
    }
    sexInput.value = "male";
  });

  femaleInput.addEventListener("click", () => {
    if (maleInput.checked) {
      maleInput.checked = false;
    }
    sexInput.value = "female";
  });
}
maleOrFemale();

class Contact {
  firstName;
  lastName;
  address;
  age;
  sex;
  constructor(firstName, lastName, address, age, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.sex = sex;
  }
}

function generateContactCard(contactItem) {
  return `<div class="cardBody">
    <ul>
      <li>firsname:<strong>${contactItem.firstName}</strong></li>
      <li>lastname:<strong>${contactItem.lastName}</strong></li>
      <li>age:<strong>${contactItem.age}</strong></li>
      <li>address:<strong>${contactItem.address}</strong></li>
      <li>sex:<strong>${contactItem.sex}</strong></li>
    </ul>
  </div>`;
}
function insertContactCard(contactItem) {
  contactCards.innerHTML += generateContactCard(contactItem);
}

add.addEventListener("click", () => {
  allInputs.forEach((inputs) => {
    if (inputs.value.length === 0) {
      inputs.style.borderColor = "red";
    } else if (inputs.value.length > 0) {
      inputs.style.borderColor = "black";
    }
  });
  if (firstAndLastNamesInput.value.split(" ").length !== 2) {
    alert("fill name and then lastname");
    firstAndLastNamesInput.style.borderColor = "red";
  } else if (
    firstAndLastNamesInput.value.split(" ").length === 2 &&
    (maleInput.checked === true || femaleInput.checked === true)
  ) {
    const contact = new Contact(
      firstAndLastNamesInput.value.split(" ")[0],
      firstAndLastNamesInput.value.split(" ")[1],
      addressInput.value,
      ageInput.value,
      sexInput.value
    );
    insertContactCard(contact);
    firstAndLastNamesInput.value = "";
    ageInput.value = "";
    addressInput.value = "";
    maleInput.checked = false;
    femaleInput.checked = false;
  }
});
