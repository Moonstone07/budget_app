

async function fetchFavorites(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data);
}

fetchFavorites("assets/php/select.php");

function displayData(data) {
  // Get the expense list element from the DOM
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  // Loop through each expense object in the data array
  data.forEach((expense) => {
    //   console.log(expense);
    // Create a new list item element
    const newExpenseItem = document.createElement("li");

    // Set the text content of the new list item to display the expense name and amount
    newExpenseItem.innerHTML = `${expense.expense_name}: ${expense.expense_amount}`;

    // Append the new list item to the expense list element in the DOM
    expenseList.appendChild(newExpenseItem);
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
