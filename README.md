# budget_app

Develop a user-friendly budget management application to help users track and manage their personal finances effectively. The app will provide features such as expense tracking, income recording, budget setting, financial insights, and user authentication.

*Phase 1: Planning and Design*
- Create wireframes and mockups for app screens.
- Design a user-friendly and intuitive interface.

*Phase 2: Development*
  
  1. **Backend Development:**
   - Set up the server and database infrastructure using php my admin.
   - Implement user authentication and authorization. ( if possible)
   
  2. **Frontend Development:**
   - Develop app screens using the chosen technology stack (e.g., html, css and js).
   - Implement user interfaces based on the UI/UX design design principles.
   
  3. **Expense and Income Tracking:**
   - Create forms for adding/editing/deleting expenses and incomes.
   - Implement real-time calculations for balance tracking. (if possible)
   
  4. **Budget Management:**
   - Allow users to set monthly budgets and allocate categories.
   - Provide visual indicators for budget progress. (if possible)
  
*Phase 3: Testing and Refinement*

  1. **User Acceptance Testing:**
   - Invite a classmates to test it's usability and features.
   - Collect feedback and identify areas for improvement.
   
  2. **Bug Fixes and Refinement:**
   - Address bugs, glitches, and performance issues based on testing feedback.
   - Refine UI/UX based on user input.


***************
* PSEUDO CODE *
***************

# User Authentication (if possible)
class UserAuthentication:
method login(username, password):
# Check if username and password match a user in the database
if username and password match:
return user_id
else:
return None

# Data Management
class DataManager:
method getExpenses(user_id):
# Retrieve and return expenses for the user

method getIncomes(user_id):
# Retrieve and return incomes for the user

method saveExpense(user_id, expense_data):
# Save a new expense for the user

method saveIncome(user_id, income_data):
# Save a new income for the user

# Financial Analysis
class FinancialAnalyzer:
method calculateBalance(expenses, incomes):
# Calculate and return the balance based on expenses and incomes

# User Interface
class UserInterface:
method showLoginScreen():
# Display login screen

method showDashboard(user_data):
# Display user's dashboard

method showExpenses(expense_data):
# Display expense history

method showIncomes(income_data):
# Display income history

method showBudget(budget_data):
# Display budget settings and progress

# App Main Loop
class BudgetApp:
method run():
user_auth = UserAuthentication()
data_manager = DataManager()
analyzer = FinancialAnalyzer()
ui = UserInterface()

logged_in_user_id = user_auth.login(username, password)

if logged_in_user_id is not None:
while True:
ui.showDashboard(logged_in_user_id)
option = ui.getUserInput()

if option == "1":
expenses = data_manager.getExpenses(logged_in_user_id)
ui.showExpenses(expenses)
elif option == "2":
incomes = data_manager.getIncomes(logged_in_user_id)
ui.showIncomes(incomes)
elif option == "3":
budget = data_manager.getUserBudget(logged_in_user_id)
ui.showBudget(budget)
elif option == "4":
break
