const balanceElement = document.getElementById("balance");
const valueInputElement = document.querySelector("input");

const selectElement = document.querySelector("select");

const additionButtonElement = document.querySelector("footer button");

const entryListElement = document.querySelector("section ul");

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount + "€";

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";
  listEntryDescription.addEventListener("click", function () {
    const newDescription = prompt("Enter a description:");
    if (newDescription !== null) {
      listEntryDescription.innerText = newDescription;
    }
  });

  const listEntryOperator = document.createElement("span");

  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}

function updateBalance() {
  let total = 0;

  for (let item of entryListElement.children) {
    const valueElement = item.querySelector("strong");
    const operationElement = item.querySelector("span");

    const value = parseInt(valueElement.innerText);
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }
  balanceElement.innerText = total + "€";
}

additionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);
  valueInputElement.value = "";

  updateBalance();
};
