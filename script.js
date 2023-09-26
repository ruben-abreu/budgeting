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

    const valueText = valueElement.innerText;
    const amount = parseFloat(valueText); // Parse the amount as a floating-point number

    if (!isNaN(amount)) {
      const operation = operationElement.innerText;
      if (operation === "+") {
        total += amount;
      } else if (operation === "-") {
        total -= amount;
      }
    }
  }

  balanceElement.innerText = total.toFixed(2) + "€"; // Display the total with two decimal places
}

additionButtonElement.onclick = function () {
  const amountText = valueInputElement.value.trim();
  const operation = selectElement.value;

  const amount = parseFloat(amountText); // Parse the amount as a floating-point number

  if (!isNaN(amount)) {
    addEntry(amount, operation);
    valueInputElement.value = "";

    updateBalance();
  } else {
    alert("Please enter a valid numeric amount.");
  }
};
