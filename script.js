// Function to show the login form and hide the signup form
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

// Function to show the signup form and hide the login form
function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

// Function to handle user login
function login() {
    // Implement login logic here (API call to the backend)
    // If login is successful, show the dashboard
    document.getElementById("dashboard").style.display = "block";
    // Fetch and display expenses here
}

// Function to handle user signup
function signup() {
    // Implement signup logic here (API call to the backend)
    // If signup is successful, show the dashboard
    document.getElementById("dashboard").style.display = "block";
    // Fetch and display expenses here
}

// Function to add an expense
function addExpense() {
    // Implement logic to add an expense (API call to the backend)
    // After adding an expense, fetch and display updated expenses
}

// Function to fetch and display expenses
function fetchExpenses() {
    // Implement logic to fetch expenses (API call to the backend)
    // Populate the expense table with the fetched data
}

// Function to delete an expense
function deleteExpense(expenseId) {
    // Implement logic to delete an expense (API call to the backend)
    // After deletion, fetch and display updated expenses
}
