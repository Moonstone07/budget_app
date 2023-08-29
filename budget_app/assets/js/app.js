document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');

    const expenseName = expenseNameInput.value;
    const expenseAmount = expenseAmountInput.value;

    // Clear the form fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Add the new expense to the expense list
    const expenseList = document.getElementById('expense-list');
    const newExpenseItem = document.createElement('li');
    newExpenseItem.textContent = `${expenseName}: $${expenseAmount}`;
    expenseList.appendChild(newExpenseItem);

    // Send the expense data to the server using form submission
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'add_expense.php';

    const nameField = document.createElement('input');
    nameField.type = 'hidden';
    nameField.name = 'name';
    nameField.value = expenseName;

    const amountField = document.createElement('input');
    amountField.type = 'hidden';
    amountField.name = 'amount';
    amountField.value = expenseAmount;

    form.appendChild(nameField);
    form.appendChild(amountField);
    document.body.appendChild(form);
    form.submit();
});
