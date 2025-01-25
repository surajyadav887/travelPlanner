import React, { useState } from "react";
import "./BudgetTracker.css";


const BudgetTracker = () => {
  const [totalBudget, setTotalBudget] = useState(""); // Total budget input
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState(""); // Custom category input
  const [categories, setCategories] = useState(["Food", "Transport", "Accommodation", "Entertainment"]); // Default categories
  const [expensesList, setExpensesList] = useState([]);

  const totalExpenses = expensesList.reduce((sum, item) => sum + item.expense, 0); // Sum of all expenses
  const remainingBudget = totalBudget ? totalBudget - totalExpenses : 0; // Calculate remaining budget

  // Handle adding a new expense
  const handleAddExpense = () => {
    if (expense && category && !isNaN(expense) && expense > 0) {
      if (expense > remainingBudget) {
        alert("Expense exceeds remaining budget!");
        return;
      }
      const newExpense = { id: expensesList.length + 1, expense: parseFloat(expense), category };
      setExpensesList([...expensesList, newExpense]);

      // Clear input fields after adding
      setExpense("");
      setCategory("");
    } else {
      alert("Please enter a valid expense and select a category.");
    }
  };

  // Handle adding a custom category
  const handleAddCategory = () => {
    if (customCategory && !categories.includes(customCategory)) {
      setCategories([...categories, customCategory]);
      setCustomCategory("");
    } else {
      alert("Invalid or duplicate category.");
    }
  };

  // Handle deleting an expense
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expensesList.filter((item) => item.id !== id);
    setExpensesList(updatedExpenses);
  };

  return (
    <div className="budget-tracker-container">
      <h2>Budget Tracker</h2>
      <p>Track your expenses and manage your travel spending.</p>

      {/* Set Total Budget */}
      <div className="form-group">
        <label>Total Budget:</label>
        <input
          type="number"
          value={totalBudget}
          onChange={(e) => setTotalBudget(Math.max(0, parseFloat(e.target.value)))}
          placeholder="Enter your total budget"
        />
      </div>

      {/* Add Expense Form */}
      <div className="form-container">
        <div className="form-group">
          <label>Expense Amount:</label>
          <input
            type="number"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Enter expense"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button className="add-expense-button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>

      {/* Add Custom Category */}
      <div className="form-group">
        <label>Add Custom Category:</label>
        <input
          type="text"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          placeholder="Enter new category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      {/* Budget Summary */}
      <div className="budget-summary">
        <h3>Budget Summary</h3>
        <p>
          <strong>Total Budget:</strong> ${totalBudget || 0}
        </p>
        <p>
          <strong>Total Expenses:</strong> ${totalExpenses}
        </p>
        <p>
          <strong>Remaining Budget:</strong> ${remainingBudget >= 0 ? remainingBudget : 0}
        </p>
        {remainingBudget < 0 && <p style={{ color: "red" }}>Warning: You have exceeded your budget!</p>}
      </div>

      {/* Expense List Table */}
      <div className="expenses-list-table">
        <h3>Expense List</h3>
        {expensesList.length > 0 ? (
          <table className="expense-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Amount ($)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expensesList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.expense.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDeleteExpense(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No expenses added yet.</p>
        )}
      </div>
    </div>
  );
};

export default BudgetTracker;
