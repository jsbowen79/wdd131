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

})

const hamButton = document.querySelector("#menu"); 
const navigation = document.querySelector(".navigation"); 
hamButton.addEventListener("click", function () {
    navigation.classList.toggle("open"); 
    hamButton.classList.toggle("open"); 
})