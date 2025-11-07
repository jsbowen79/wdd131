
const input = document.querySelector("input"); 
const button = document.querySelector("button"); 
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        const entry = document.createElement("li");
        const del = document.createElement("button");
        entry.textContent = input.value;
        del.textContent = "❌";
        entry.appendChild(del);
        list.appendChild(entry);
        del.addEventListener("click", function ()
        {
            entry.remove();
            setTimeout(() => input.focus(), 0);
            input.value = null;
        })
    }
    input.focus(); 
    input.value = null; 
});

