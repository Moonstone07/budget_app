// toggling elements

const incomeTotal = document.querySelector(".income_total");
const outcomeTotal = document.querySelector(".outcome_total");
const balanceTotal = document.querySelector(".balance .value");
const chart1 = document.querySelector(".chart");
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

const expenseElement = document.querySelector("#expense");
const incomeElement = document.querySelector("#income");
const allElement = document.querySelector("#all");

expenseElement.classList.add("active");
expenseElement.classList.remove("active");

expenseBtn.addEventListener("click", () => {
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
  Show(expenseElement);
  Hide([incomeElement, allElement]);
});
incomeBtn.addEventListener("click", () => {
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
  Show(incomeElement);
  Hide([expenseElement, allElement]);
});
allBtn.addEventListener("click", () => {
  active(allBtn);
  inactive([expenseBtn, incomeBtn]);
  Show(allElement);
  Hide([expenseElement, incomeElement]);
});

function active(element) {
  element.classList.add("active");
}
function show(element) {
  element.classList.remove("hide");
}
function hide(element) {
  element.classList.add("hide");
}

function hide(elementsArray) {
  elementsArray.forEach((element) => {
    element.classList.add("hide");
  });
}

function inactive(elementsArray) {
  elementsArray.forEach((element) => {
    element.classList.remove("active");
  });
}

// add entries

add_income.addEventListener("click", () => {
  let income = {
    type: "income",
    name: income_name.value,
    amount: income_amount.value,
  };
  entry_list.push(income);
  updateUI();
  clear_input(income_name, income_amount);

  // fetch("assets/php/insert.php", {
  //   method: "POST",
  //   body: JSON.stringify(income),
  // })
});
