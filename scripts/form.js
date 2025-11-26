document.addEventListener('DOMContentLoaded', function () {
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

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
  
const productSelectEl = document.getElementById('productName');
if (productSelectEl) {
    for (const product of products){ 
        optionEl = document.createElement("option");
        optionEl.textContent = product.name; 
        optionEl.value = product.id;
        // optionLabelEl = document.createElement('label'); 
        // optionLabelEl.for = "productName"; 
        // optionLabelEl.

        productSelectEl.appendChild(optionEl); 
    }
}