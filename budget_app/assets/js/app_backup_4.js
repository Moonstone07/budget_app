async function fetch_favorites(url) {
  const response = await fetch(url);
  const data = await response.json();
  display_data(data);
  calculate_balance();
}

fetch_favorites("assets/php/select.php");

// Get the income and expense list elements from the DOM and make them global variables so they can be referenced in the display_data function and the calculate_balance function
const income_list = document.getElementById("income_list");
const expense_list = document.getElementById("expense_list");
const all_list = document.getElementById("all_list");

function display_data(data) {
  // Clear the lists
  income_list.innerHTML = "";
  expense_list.innerHTML = "";
  all_list.innerHTML = "";

  // Loop through each expense object in the data array
  data.forEach((entry) => {
    // Create a new list item element
    const new_expense_item = document.createElement("li");
    const new_income_item = document.createElement("li");
    const new_all_item = document.createElement("li");

    // Set the text content of the new list item to display the expense name and amount
    new_expense_item.textContent = `${entry.expense_name}: ${entry.expense_amount}`;
    new_income_item.textContent = `${entry.expense_name}: ${entry.expense_amount}`;
    new_all_item.textContent = `${entry.expense_name}: ${entry.expense_amount}`;

    // Check the category of the expense and append it to the appropriate list
    if (entry.category === "income") {
      income_list.appendChild(new_income_item);
    } else if (entry.category === "expense") {
      expense_list.appendChild(new_expense_item);
    }
    all_list.appendChild(new_all_item);
  });

  // Calculate and display the balance
  calculate_balance();
}

const submit_form = document.getElementById("add_expense");
submit_form.addEventListener("click", get_form_data);

function get_form_data(event) {
  event.preventDefault();

  // Get the form data and call an async function to insert the data into the database
  const insert_form_data = new FormData(
    document.getElementById("expense_form")
  );
  let url = "assets/php/insert.php";
  inserter(url, insert_form_data);
}

// async function to insert the data into the database
async function inserter(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  // console.log(response);
  const confirmation = await response.json();

  console.log(confirmation);

  fetch_favorites("assets/php/select.php");

  // Clear input and textarea fields
  const subject_input = document.querySelector('input[name="expense_name"]');
  const text_area = document.querySelector('input[name="expense_amount"]');

  subject_input.value = "";
  text_area.value = "";
}

// Get references to tab buttons and list sections
const income_tab = document.getElementById("income_tab");
const expense_tab = document.getElementById("expense_tab");
const all_tab = document.getElementById("all_tab");
const income_section = document.getElementById("income_section");
const expense_section = document.getElementById("expense_section");
const all_section = document.getElementById("all_section");

// Set the all Section as the initially displayed section
showSection(all_section);

// Function to show a specific section and hide the others
function showSection(sectionToShow) {
  // Create an array of tabs and sections
  const tabs = [income_tab, expense_tab, all_tab];
  const sections = [income_section, expense_section, all_section];

  // Hide all sections
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  sectionToShow.style.display = "block";
}

// Add click event listeners to tab buttons
income_tab.addEventListener("click", () => showSection(income_section));
expense_tab.addEventListener("click", () => showSection(expense_section));
all_tab.addEventListener("click", () => showSection(all_section));

function calculate_balance() {
  const balance_element = document.getElementById("balance");
  const income_total_element = document.querySelector(".income_total");
  const expense_total_element = document.querySelector(".outcome_total");

  let total_income = calculate_total(income_list);
  let total_expense = calculate_total(expense_list);

  const balance = total_income - total_expense;

  balance_element.innerHTML = `$ ${balance}`;
  income_total_element.innerHTML = `$ ${total_income}`;
  expense_total_element.innerHTML = `$ ${total_expense}`;
}

function calculate_total(list) {
  return Array.from(list.children).reduce((total, item) => {
    const amount = parseFloat(item.textContent.split(":")[1]);
    return total + amount;
  }, 0);
}

// function show_section(section_to_show) {
//   // Add click event listeners to tab buttons
//   income_tab.addEventListener("click", () => show_section(income_section));
//   expense_tab.addEventListener("click", () => show_section(expense_section));
//   all_tab.addEventListener("click", () => show_section(all_section));

//   // Hide all sections
//   income_section.style.display = "none";
//   expense_section.style.display = "none";
//   all_section.style.display = "none";

//   // Show the selected section
//   section_to_show.style.display = "block";
// }
