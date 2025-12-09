document.addEventListener('DOMContentLoaded', function () {
    const unknownIncomeEL = document.getElementById('unknownIncome');
    const unknownExpenseEL = document.getElementById('unknown');
    const incomeSubSpan = document.getElementById('incomeSub');
    const expenseSubSpan = document.getElementById('expenseSub');
    const totalSpan = document.getElementById('total');
    const smallTotalSpanEL = document.getElementById('smallTotal')
    const incomeColumnEL = document.getElementById('addIncome');
    const expenseColumnEL = document.getElementById('addExpense');
    const incomeSubmitEL = document.getElementById('incomeSubmit');
    const expenseSubmitEL = document.getElementById("submitExpense");
    const radioEL = document.querySelectorAll('.filter input[type="radio"]');
    const filteredEL = document.querySelector('.filteredResults');
    const inputsInFirstCol = document.querySelectorAll('.firstCol input[type="number"]');
    const inputsInSecondCol = document.querySelectorAll('.secondColBudget input[type="number"]');
    
    
    let expenseSubtotal = 0;
    let incomeSubtotal = 0;
    let incomeArray = new Array ();
    let expenseArray = new Array();


    
    function restoreIncomeFromStorage() {
        if (localStorage.getItem("incomeArray")) {
            
            incomeArray = JSON.parse(localStorage.getItem("incomeArray"));
            
            if (incomeArray)
            {
                
                incomeArray.forEach(entry =>
                {
                    let inputElement = document.getElementById(entry.id);
                    
                    if (inputElement)
                    {
                        inputElement.value = entry.value;
                        
                        return;
                    }
                    
                    
                    const labelEL = document.createElement("label");
                    labelEL.setAttribute("for", entry.id);
                    labelEL.textContent = entry.item;
                    
                    const amountEL = document.createElement("input");
                    amountEL.type = "number";
                    amountEL.step = "0.01";
                    amountEL.value = entry.value;
                    amountEL.id = entry.id;
                    amountEL.name = entry.id;
                    
                    amountEL.classList.add(entry.type);
                    
                    amountEL.addEventListener("change", function ()
                    {
                        const entry = incomeArray.find(e => e.id === this.id);
                        entry.value = Number(this.value);
                        subtotalIncome();
                        saveToLocalStorage();
                    });
                    
                    
                    incomeColumnEL.appendChild(labelEL);
                    incomeColumnEL.appendChild(amountEL);
                });
            }
            
            subtotalIncome();
        }
    }  

    function restoreExpenseFromStorage() {
        if (localStorage.getItem("expenseArray")) {

            expenseArray = JSON.parse(localStorage.getItem("expenseArray"));

            if (expenseArray) {

                expenseArray.forEach(entry => {
                    let inputElement = document.getElementById(entry.id);

                    if (inputElement) {
                        inputElement.value = entry.value;

                        return;
                    }


                    const labelEL = document.createElement("label");
                    labelEL.setAttribute("for", entry.id);
                    labelEL.textContent = entry.item;

                    const amountEL = document.createElement("input");
                    amountEL.type = "number";
                    amountEL.step = "0.01";
                    amountEL.value = entry.value;
                    amountEL.id = entry.id;
                    amountEL.name = entry.id;

                    amountEL.classList.add(entry.type);

                    amountEL.addEventListener("change", function () {
                        const entry = expenseArray.find(e => e.id === this.id);
                        entry.value = Number(this.value);
                        subtotalExpense();
                        saveToLocalStorage();
                    });


                    expenseColumnEL.appendChild(labelEL);
                    expenseColumnEL.appendChild(amountEL);
                });
            }

            subtotalExpense();
        }
    }  

    function loadBaseIncomeElements() {
        const baseInputs = document.querySelectorAll('.firstCol input[type="number"]');

        baseInputs.forEach(input => {
            const labelEL = document.querySelector(`label[for="${input.id}"]`);
            
            if (!incomeArray.find(e => e.id === input.id)) {
                incomeArray.push({
                    id: input.id,
                    type: input.className,
                    item: labelEL ? labelEL.textContent : input.id,
                    value: Number(input.value)
                });
            }
        });
    }
    
    function loadBaseExpenseElements() {
        const baseInputs = document.querySelectorAll('.secondColBudget input[type="number"]');

        baseInputs.forEach(input => {
            const labelEL = document.querySelector(`label[for="${input.id}"]`);

            if (!expenseArray.find(e => e.id === input.id)) {
                expenseArray.push({
                    id: input.id,
                    item: labelEL ? labelEL.textContent : input.id,
                    value: Number(input.value)
                });
            }
        });
    }
    
    function subtotalIncome() {
        incomeSubtotal = 0;
        
        for (let i = 0; incomeArray.length > i; i++) {
            
            incomeSubtotal += Number(incomeArray[i].value);
        };
        incomeSubSpan.textContent = `$${incomeSubtotal.toFixed(2)}`;
        const gross = incomeSubtotal - expenseSubtotal;
        totalSpan.textContent = `$${gross.toFixed(2)}`;
        smallTotalSpanEL.textContent = `$${gross.toFixed(2)}`;
    };
    
    function subtotalExpense() {
        expenseSubtotal = 0;

        for (let i = 0; expenseArray.length > i; i++) {

            expenseSubtotal += Number(expenseArray[i].value);
        };
        expenseSubSpan.textContent = `$${expenseSubtotal.toFixed(2)}`;
        const gross = incomeSubtotal - expenseSubtotal;
        totalSpan.textContent = `$${gross.toFixed(2)}`;
        smallTotalSpanEL.textContent = `$${gross.toFixed(2)}`;
    };
    
    
    function initialListeners() {
        inputsInFirstCol.forEach(inputElement => {
            inputElement.addEventListener('change', function () {
                const entry = incomeArray.find(e => e.id === inputElement.id);
                if (entry) {
                    entry.value = Number(this.value);
                }
                subtotalIncome();
                saveToLocalStorage();
            });
        });
        
        inputsInSecondCol.forEach(inputElement => {
            inputElement.addEventListener('change', function () {
                const entry = expenseArray.find(e => e.id === inputElement.id);
                if (entry) {
                    entry.value = Number(this.value);
                }
                subtotalExpense();
                saveToLocalStorage();
            });
        });
    }
    
    incomeSubmitEL.addEventListener("click", function () { 
        addToDOM();
        saveToLocalStorage();
    });

    expenseSubmitEL.addEventListener("click", function () {
        addExpenseToDOM();
        saveToLocalStorage();
    });

    
    function addToDOM() {
        let safeId = crypto.randomUUID();
        const categoryEL = document.createElement("label");
        categoryEL.setAttribute("for", safeId);
        categoryEL.textContent = unknownIncomeEL.value;
        categoryEL.classList.add("other");
        
        const amountEL = document.createElement('input');
        amountEL.setAttribute("id", safeId);
        amountEL.setAttribute("name", unknownIncomeEL.value);
        amountEL.setAttribute("type", "number");
        amountEL.setAttribute("step", "0.01");
        amountEL.value = 0;
        amountEL.classList.add("other");
        
        incomeColumnEL.appendChild(categoryEL);
        incomeColumnEL.appendChild(amountEL);
        
        incomeArray.push({
            id: safeId,
            type: "other",
            item: unknownIncomeEL.value,
            value: 0
        });
        
        amountEL.addEventListener("input", function () {
            const entry = incomeArray.find(e => e.id === this.id);
            entry.value = Number(this.value);
            subtotalIncome();
            saveToLocalStorage();
        });
        
        saveToLocalStorage();
    }

    function addExpenseToDOM() {
        let safeId = crypto.randomUUID();
        const categoryEL = document.createElement("label");
        categoryEL.setAttribute("for", safeId);
        categoryEL.textContent = unknownExpenseEL.value;
        categoryEL.classList.add("other");

        const amountEL = document.createElement('input');
        amountEL.setAttribute("id", safeId);
        amountEL.setAttribute("name", unknownExpenseEL.value);
        amountEL.setAttribute("type", "number");
        amountEL.setAttribute("step", "0.01");
        amountEL.value = 0;

        expenseColumnEL.appendChild(categoryEL);
        expenseColumnEL.appendChild(amountEL);

        expenseArray.push({
            id: safeId,
            item: unknownExpenseEL.value,
            value: 0
        });

        amountEL.addEventListener("input", function () {
            const entry = expenseArray.find(e => e.id === this.id);
            entry.value = Number(this.value);
            subtotalExpense();
            saveToLocalStorage();
        });

        saveToLocalStorage();
    }
    
    function saveToLocalStorage() {
        localStorage.setItem("incomeArray", JSON.stringify(incomeArray));
        localStorage.setItem("expenseArray", JSON.stringify(expenseArray));
    }

    restoreIncomeFromStorage();
    restoreExpenseFromStorage(); 
    loadBaseIncomeElements();
    loadBaseExpenseElements(); 
    initialListeners();
    subtotalIncome();
    subtotalExpense(); 

    
    radioEL.forEach(radioButton => {
        radioButton.addEventListener("change", function () {
            
            const filteredResults = incomeArray.filter(entry =>
                entry.type.toString().includes(this.id)
            );
            
            filteredEL.replaceChildren();

            if (this.checked) {
                    const heading = document.createElement('p');
                    heading.textContent = `Income Filter Results: `
                    heading.classList.add('heading');
                    filteredEL.appendChild(heading);

                    filteredResults.forEach(entry => {
                        const category = document.createElement('p');
                        const amount = document.createElement('p');
                        category.classList.add('filterResults');
                        amount.classList.add('filterResults');
                        category.textContent = entry.item;
                        amount.textContent = `$${entry.value.toFixed(2)}`;
                        filteredEL.appendChild(category);
                        filteredEL.appendChild(amount);

                    });
                }
            })
        });

        
        
        
        
        
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
        
    });
        