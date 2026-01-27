let expenses = [];
let total = 0;

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!title || !amount) {
        alert("Enter valid data!");
        return;
    }

    const expense = { title, amount, category };
    expenses.push(expense);

    total += amount;
    updateUI();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

function updateUI() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach((e, index) => {
        list.innerHTML += `
        <div class="item">
            <span>${e.title} (${e.category})</span>
            <span>₹${e.amount}</span>
            <button class="delete" onclick="removeExpense(${index})">X</button>
        </div>
        `;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

function removeExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    updateUI();
}
