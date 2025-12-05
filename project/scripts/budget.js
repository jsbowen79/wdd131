document.addEventListener('DOMContentLoaded', function ()
{
    const unknownIncomeEL = document.getElementById('unknownIncome'); 
    const unknownExpenseEL = document.getElementById('unknown');
    const incomeSubSpan = document.getElementById('incomeSub');
    const expenseSubSpan = document.getElementById('expenseSub'); 
    const totalSpan = document.getElementById('total');
    const smallTotalSpanEL = document.getElementById('smallTotal')
    const incomeColumnEL = document.getElementById('addIncome');
    const expenseColumnEL = document.getElementById('addExpense'); 
    const incomeSubmitEL = document.getElementById('incomeSubmit'); 
    const expenseSubmitEL = document.getElementById("submitExpense")
    const firstColEL = document.getElementById('firstCol'); 
    const secondColEL = document.getElementById('secondColBudget'); 

    let expenseSubtotal = 0; 
    let incomeSubtotal = 0; 


    
    function subtotalExpenses() {
        loadExpenseElements();
        expenseSubtotal = 0;
        
        inputsInSecondCol.forEach(inputElement => {
            expenseSubtotal += Number((inputElement.value) || 0);  
            expenseSubSpan.textContent = `$${expenseSubtotal.toFixed(2)}`;
            const gross = incomeSubtotal - expenseSubtotal;
            totalSpan.textContent = `$${gross.toFixed(2)}`;
            smallTotalSpanEL.textContent = `$${gross.toFixed(2)}`;
        })
        
    };
    
    function subtotalIncome() {
        inputsInFirstCol = document.querySelectorAll('.firstCol input[type="number"]');
        incomeSubtotal = 0;
        
        inputsInFirstCol.forEach(inputElement => {
            incomeSubtotal += Number((inputElement.value) || 0);
            incomeSubSpan.textContent = `$${incomeSubtotal.toFixed(2)}`;
            const gross = incomeSubtotal - expenseSubtotal; 
            totalSpan.textContent = `$${gross.toFixed(2)}`; 
            smallTotalSpanEL.textContent = `$${gross.toFixed(2)}`;
        })
    };
   
    function loadExpenseElements() {
        inputsInSecondCol = document.querySelectorAll('.secondColBudget input[type="number"]');
        inputsInSecondCol.forEach(inputElement => {
            inputElement.addEventListener('change', subtotalExpenses);
        });
    };
    
    function loadIncomeElements() {
        inputsInFirstCol = document.querySelectorAll('.firstCol input[type="number"]');
        inputsInFirstCol.forEach(inputElement => {
            inputElement.addEventListener('change', subtotalIncome);
        });
    };
        
    incomeSubmitEL.addEventListener("click", function () {
        let safeId = unknownIncomeEL.value.trim().replace(/\s+/g, "_");
        let categoryEL = document.createElement("label");
        let amountEL = document.createElement('input');
        incomeColumnEL.appendChild(categoryEL);
        categoryEL.setAttribute("for", safeId);
        categoryEL.textContent = unknownIncomeEL.value;

        incomeColumnEL.appendChild(amountEL);
        amountEL.setAttribute("id", safeId);
        amountEL.setAttribute("name", safeId);
        amountEL.setAttribute("type", "number");
        amountEL.setAttribute("step", "0.01");
        amountEL.value = 0;
        loadIncomeElements();
        subtotalIncome();
    });

    expenseSubmitEL.addEventListener("click", function () {
        let safeId = unknownExpenseEL.value.trim().replace(/\s+/g, "_");
        let categoryEL = document.createElement("label");
        let amountEL = document.createElement('input');
        expenseColumnEL.appendChild(categoryEL);
        categoryEL.setAttribute("for", safeId);
        categoryEL.textContent = unknownExpenseEL.value;

        expenseColumnEL.appendChild(amountEL);
        amountEL.setAttribute("id", safeId);
        amountEL.setAttribute("name", safeId);
        amountEL.setAttribute("type", "number");
        amountEL.setAttribute("step", "0.01");
        amountEL.value = 0
        loadExpenseElements();
        subtotalExpenses();
    });
    loadIncomeElements();
    loadExpenseElements(); 
    subtotalExpenses(); 
    subtotalIncome(); 

    const yearEl = document.getElementById('currentyear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const lastEL = document.getElementById('lastModified');
    const raw = document.lastModified;

    if (!raw) {
        lastEL.textContent = 'Last Modified: not available'
        return;
    }

    lastEL.textContent = 'Last Modified: ' + raw;


})