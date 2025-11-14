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
     
    
    let stringWindchill = "";
    const tempEl = document.getElementById('temp')
    const speedEl = document.getElementById('speed')
    const windChillEL = document.getElementById('windchill');
    
       
    const speedString = speedEl.textContent.replace(/\D/g, "");
    const tempString = tempEl.textContent.replace(/\D/g, "");
    const temp = Number(tempString); 
    const speed = Number(speedString); 
        
    function calculateWindChill() {

    const windChill = 35.74 + (0.6215 * temp) - 35.75 * (speed ** 0.16) + (.4275 * temp) * (speed ** 0.16)
    stringWindchill = windChill.toFixed(1) + "° F";
    return stringWindchill;
    }
    
    if (temp <= 50 && speed > 3) {
        windChillEL.textContent = calculateWindChill();
    }
    else {
        stringWindchill = "No Windchill";
        windChillEL.textContent = stringWindchill; 
    }
            
});