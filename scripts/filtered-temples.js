document.addEventListener('DOMContentLoaded', function () {
    const allTemplesEl = document.querySelector(".cards"); 
    const homeEL = document.getElementById("home"); 
    const oldEl = document.getElementById("old"); 
    const newEL = document.getElementById("new");
    const largeEL = document.getElementById("large");
    const smallEl = document.getElementById("small"); 
    const yearEl = document.getElementById('currentyear');
    const h1El = document.querySelector('h1'); 
    homeEL.classList.add("active"); 
    let isFirstCard = true; 

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

    
    const hamButton = document.querySelector("#menu"); 
    const navigation = document.querySelector(".navigation"); 
    hamButton.addEventListener("click", function () {
        navigation.classList.toggle("open"); 
        hamButton.classList.toggle("open"); 
    })
    
    
    const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Centennial, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-43087.jpg"
    },
    {
        templeName: "Fort Collins Colorado",
        location: "Fort Collins, Colorado, United States",
        dedicated: "2016, October, 16",
        area: 42000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fort-collins-colorado-temple/fort-collins-colorado-temple-3330.jpg"
    },
    {
        templeName: "Kona Hawaii",
        location: "Kailua Kona, Hawaii, United States",
        dedicated: "2000, January, 23",
        area: 12325,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-8328.jpg"
    }]

    function insertCard() {
    
        const formatter = new Intl.NumberFormat('en-US');
        const card = document.createElement("div");
        card.classList.add("card");
        const heading = document.createElement("h2");
        const headingText = document.createTextNode(temple.templeName);
        heading.appendChild(headingText);
        card.appendChild(heading);
        
        const location = document.createElement("p");
        const locationText = document.createTextNode(`Location: ${temple.location}`);
        location.appendChild(locationText);
        card.appendChild(location);
        
        const dedicationDate = document.createElement("p");
        const dedicationDateText = document.createTextNode(`Dedicated: ${temple.dedicated}`);
        dedicationDate.appendChild(dedicationDateText);
        card.appendChild(dedicationDate);
        
        const size = document.createElement("p");
        const sizeText = document.createTextNode(`Size: ${formatter.format(temple.area)} sq. ft.`);
        size.appendChild(sizeText);
        card.appendChild(size);
        
        const photo = document.createElement("img");
        photo.src = temple.imageUrl;
        photo.alt = temple.templeName;
        if (isFirstCard) {
            photo.loading = "eager";
            isFirstCard = false; 
        }
        else { photo.loading = "lazy" };
        card.appendChild(photo);
        
        document.querySelector(".cards").appendChild(card);
    }
    function clearPage() {
        while (allTemplesEl.firstChild) {
            allTemplesEl.removeChild(allTemplesEl.lastChild);
        }
    }
    
    function goHome() {
            h1El.textContent = "Temples"
            clearPage(); 
       
            for (temple of temples) {
                insertCard();
            }
        }

    function getOld() {
    
        clearPage(); 
        h1El.textContent = "Old Temples"
        
        for (temple of temples) {
            const year = parseInt(temple.dedicated.split(",")[0]);
            if (year < 1900)
                {
                    insertCard();     
                }
        } 
    }
    
    function getNew() {
        clearPage();
        h1El.textContent = "New Temples";
    
        for (temple of temples) {
            const year = parseInt(temple.dedicated.split(",")[0]);
            if (year > 2000) {
                insertCard();
            }
        }
    }

    function getLarge() {
        clearPage(); 
        h1El.textContent = "Large Temples"

        for (temple of temples) {
            if (temple.area > 90000) {
                insertCard(); 
            }
        }
        
    }

    function getSmall() {
        clearPage(); 
        h1El.textContent = "Small Temples"
        for (temple of temples) {
            if (temple.area < 10000) {
                insertCard(); 
            }
        }
    }
    requestIdleCallback(() => {
        goHome();        
    })

    oldEl.addEventListener("click", getOld); 
    homeEL.addEventListener("click", goHome); 
    newEL.addEventListener("click", getNew); 
    largeEL.addEventListener("click", getLarge);
    smallEl.addEventListener("click", getSmall); 

    const menuLinks = document.querySelectorAll(".navigation a");
        menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuLinks.forEach(l => l.classList.remove("active")); 
            this.classList.add("active");
        })
    })
})