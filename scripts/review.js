let count = Number(localStorage.getItem('reviewCount')) || 0;
count++; 
localStorage.setItem('reviewCount', count.toString()); 

counterEL = document.getElementById('counter'); 
if (counterEL) {
     
    counterEL.textContent = (`You have submitted ${count} product reviews!`)

}