document.addEventListener('DOMContentLoaded', function ()
{
    const q1a1buttonEL = document.getElementById("q1a1"); 
    const q1a2buttonEL = document.getElementById("q1a2");
    const q1a3buttonEL = document.getElementById("q1a3");
    const q1a4buttonEL = document.getElementById("q1a4");
    const q2a1buttonEL = document.getElementById("q2a1");
    const q2a2buttonEL = document.getElementById("q2a2");
    const q2a3buttonEL = document.getElementById("q2a3");
    const q2a4buttonEL = document.getElementById("q2a4");
    const q3a1buttonEL = document.getElementById("q3a1");
    const q3a2buttonEL = document.getElementById("q3a2");
    const q4a1buttonEL = document.getElementById("q4a1");
    const q4a2buttonEL = document.getElementById("q4a2");
    const q4a3buttonEL = document.getElementById("q4a3");
    const q4a4buttonEL = document.getElementById("q4a4");
    const q5a1buttonEL = document.getElementById("q5a1");
    const q5a2buttonEL = document.getElementById("q5a2");
    const q5a3buttonEL = document.getElementById("q5a3");
    const q5a4buttonEL = document.getElementById("q5a4");
    const q6a1buttonEL = document.getElementById("q6a1");
    const q6a2buttonEL = document.getElementById("q6a2");

    const a1EL = document.getElementById("a1"); 
    const a2EL = document.getElementById("a2"); 
    const a3EL = document.getElementById("a3"); 
    const a4EL = document.getElementById("a4"); 
    const a5EL = document.getElementById("a5"); 
    const a6EL = document.getElementById("a6"); 

    const q1Group = document.querySelector(".q1Group");
    const q2Group = document.querySelector(".q2Group");
    const q3Group = document.querySelector(".q3Group");
    const q4Group = document.querySelector(".q4Group");
    const q5Group = document.querySelector(".q5Group");
    const q6Group = document.querySelector(".q6Group");
    
    let response1EL = document.createElement("p"); 
    let response2EL = document.createElement("p");
    let response3EL = document.createElement("p");
    let response4EL = document.createElement("p");
    let response5EL = document.createElement("p");
    let response6EL = document.createElement("p");
    let showMe = "";

    function showMessage(showMe) {
        const message = document.getElementById("message"); 
        message.textContent = showMe; 
        message.classList.add("show"); 

        setTimeout(() => {
            message.classList.remove("show");
        }, 10000);
    }

    
    q1Group.addEventListener("change", function (e) {
        if (a1EL.contains(response1EL))
        {
            a1EL.removeChild(response1EL); 
        }
        if (e.target.id === "q1a1")
        {
            showMe = "Although tracking spending is a perk of budgeting, this is not the primary purpose."; 
            response1EL.textContent = showMe;
        }
        else if (e.target.id === "q1a2")
        {
            showMe = "That is Correct!  The primary purpose of budgeting is to plan how to use your money!  Well done. ";
            response1EL.textContent = showMe;
        }
        else if (e.target.id === "q1a3")
        {
            showMe ="Unfortunately, budgeting does not avoid paying your bills!";
            response1EL.textContent = showMe; 
        }
        else if (e.target.id === "q1a4")
        {
            showMe = "Although budgeting can make investing easier, this is not the primary purpose.";
            response1EL.textContent = showMe
        } 
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a1EL.appendChild(response1EL);
        }
    })

    q2Group.addEventListener("change", function (e) {
        if (a2EL.contains(response2EL)) {
            a2EL.removeChild(response2EL);
        }
        if (e.target.id === "q2a1") {
            showMe = "A fixed expense does not change.  Groceries are not a fixed expense.";
            response2EL.textContent = showMe; 
        }
        else if (e.target.id === "q2a2") {
            showMe= "That is Correct!  Rent or Mortgage is a fixed expense because it does not change from month to month.  Great Job! ";
            response2EL.textContent = showMe;
        }
        else if (e.target.id === "q2a3") {
            showMe = "A fixed expense does not change.  Gasoline is not a fixed expense.";
            response2EL.textContent = showMe;
        }
        else if (e.target.id === "q2a4") {
            showMe = "A fixed expense does not change.  Eating out is not a fixed expense.";
            response2EL.textContent = showMe; 
        }
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a2EL.appendChild(response2EL);
        }
    })

    q3Group.addEventListener("change", function (e) {
        if (a3EL.contains(response3EL)) {
            a3EL.removeChild(response3EL);
        }
        if (e.target.id === "q3a1") {
            showMe = "Correct.  Ideally, you should save for 3-6 months worth of expenses in your emergency fund. ";
            response3EL.textContent = showMe; 
        }
        else if (e.target.id === "q3a2") {
            showMe = "That is  not correct.  You should save for 3-6 months worth of expenses in your emergency fund.";
            response3EL.textContent = showMe; 
        }
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a3EL.appendChild(response3EL);
        }
    })

    q4Group.addEventListener("change", function (e) {
        if (a4EL.contains(response4EL)) {
            a4EL.removeChild(response4EL);
        }
        if (e.target.id === "q4a1") {
            showMe = "A variable expense changes month to month.  A car payment is not a variable expense.";
            response4EL.textContent = showMe; 
        }
        else if (e.target.id === "q4a2") {
            showMe = "A variable expense changes month to month.  Health insurance is not a variable expense.";
            response4EL.textContent = showMe; 
        }
        else if (e.target.id === "q4a3") {
            showMe = "Correct.  Movie tickets are a variable expense.  Keep it up!";
            response4EL.textContent = showMe; 
        }
        else if (e.target.id === "q4a4") {
            showMe = "A variable expense changes month to month.  An internet bill is typically not a variable expense.";
            response4EL.textContent = showMe; 
        }
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a4EL.appendChild(response4EL);
        }
    })

    q5Group.addEventListener("change", function (e) {
        if (a5EL.contains(response5EL)) {
            a5EL.removeChild(response5EL);
        }
        if (e.target.id === "q5a1") {
            showMe = "Incorrect.  Zero-based budgeting requires that you budget 100% of your income to expenses, savings, and debt payments every month leaving you with 0.";
            response5EL.textContent = showMe;
        }
        else if (e.target.id === "q5a2") {
            showMe = "Correct.  This rule suggests budgeting 50% of your income for needs, 30% for wants, and 20% for savings and debt repayment.";
            response5EL.textContent = showMe; 
        }
        else if (e.target.id === "q5a3") {
            showMe = "Incorrect.  The envelope system recommends dividing your income into envelopes for each spending category.  You are then "
                + "only allowed to spend on that category until the alloted money is gone until your next budgeting period.";
            response5EL.textContent = showMe; 
        }
        else if (e.target.id === "q5a4") {
            showMe = "Incorrect.  Reverse budgeting recommends transferring a set amount into savings first each month and then paying any "
                + "other expenses out of what is left.";
            response5EL.textContent = showMe; 
        }
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a5EL.appendChild(response5EL);
        }
    })

    q6Group.addEventListener("change", function (e) {
        if (a6EL.contains(response6EL)) {
            a6EL.removeChild(response6EL);
        }
        if (e.target.id === "q6a1") {
            showMe = "Incorrect.  Small everyday purchases can add up fast.  Failing to track and control them is a big budget buster! ";
            response6EL.textContent = showMe; 
        }
        else if (e.target.id === "q6a2") {
            showMe = "Correct.  Small everyday purchases can add up fast.  Failing to track and control them is a big budget buster!";
            response6EL.textContent = showMe; 
        }
        if (window.innerWidth < 800) {
            showMessage(showMe)
        } else {
            a6EL.appendChild(response6EL);
        }
    })

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