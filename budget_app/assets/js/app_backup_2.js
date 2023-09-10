async function fetchFavorites(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data);
}

fetchFavorites("assets/php/select.php");

function displayData(data) {
  // Get the income and expense list elements from the DOM
  const incomeList = document.getElementById("income-list");
  const expenseList = document.getElementById("expense-list");
  const allList = document.getElementById("all-list");

  // Clear the lists
  incomeList.innerHTML = "";
  expenseList.innerHTML = "";
  allList.innerHTML = "";

  // Loop through each expense object in the data array
  data.forEach((entry) => {
    // Create a new list item element
    const newExpenseItem = document.createElement("li");
    const newIncomeItem = document.createElement("li");
    const newAllItem = document.createElement("li");

    // Set the text content of the new list item to display the expense name and amount
    newExpenseItem.textContent = `${entry.expense_name}: ${entry.expense_amount}`;
    newIncomeItem.textContent = `${entry.expense_name}: ${entry.expense_amount}`;
    newAllItem.textContent = `${entry.expense_name}: ${entry.expense_amount}`;

    // Check the category of the expense and append it to the appropriate list
    if (entry.category === "income") {
      incomeList.appendChild(newIncomeItem);
    } else if (entry.category === "expense") {
      expenseList.appendChild(newExpenseItem);
    }
    allList.appendChild(newAllItem);
  });
}

const submitForm = document.getElementById("add-expense");
submitForm.addEventListener("click", getFormData);

function getFormData(event) {
  event.preventDefault();

  // Get the the form data and call an async function to insert the data into the database
  const insertFormData = new FormData(document.getElementById("expense-form"));
  let url = "assets/php/insert.php";
  inserter(url, insertFormData);
}

// async function to insert the data into the database
async function inserter(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  //   console.log(response);
  const confirmation = await response.json();

  console.log(confirmation);

  fetchFavorites("assets/php/select.php");

  // Clear input and textarea fields
  const subjectInput = document.querySelector('input[name="expense-name"]');
  const textArea = document.querySelector('input[name="expense-amount"]');

  subjectInput.value = "";
  textArea.value = "";
}

// Get references to tab buttons and list sections
const incomeTab = document.getElementById("income-tab");
const expenseTab = document.getElementById("expense-tab");
const allTab = document.getElementById("all-tab");
const incomeSection = document.getElementById("income-section");
const expenseSection = document.getElementById("expense-section");
const allSection = document.getElementById("all-section");

// Add click event listeners to tab buttons
incomeTab.addEventListener("click", () => showSection(incomeSection));
expenseTab.addEventListener("click", () => showSection(expenseSection));
allTab.addEventListener("click", () => showSection(allSection));

// Set the all Section as the initially displayed section
showSection(allSection);

// Function to show a specific section and hide the others
function showSection(sectionToShow) {
  // Hide all sections
  incomeSection.style.display = "none";
  expenseSection.style.display = "none";
  allSection.style.display = "none";

  // Show the selected section
  sectionToShow.style.display = "block";
}
