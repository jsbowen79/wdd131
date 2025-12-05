document.addEventListener('DOMContentLoaded', function ()
{
    const phoneInputEl = document.getElementById('phone'); 
    const emailInputEL = document.getElementById('inputEmail'); 
    const emailCheckboxEL = document.getElementById('email'); 
    const textCheckboxEL = document.getElementById('text')
    textCheckboxEL.addEventListener('change', function () {
        if (this.checked) {
            phoneInputEl.setAttribute("required", "true");
        }
        else { phoneInputEL.removeAttribute("required"); }
    }) 
    emailCheckboxEL.addEventListener("change", function () {
        if (this.checked) {
            emailInputEL.setAttribute("required", "true")
        } else {
            emailInputEL.removeAttribute("required")
        }
    })


    document.querySelectorAll(".yt-lite").forEach(el => {
        const id = el.dataset.id;

        const thumb = el.querySelector(".yt-lite-thumb");
        thumb.style.backgroundImage =
            `url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')`;

        el.addEventListener("click", function () {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
            iframe.title = "YouTube video player";
            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            iframe.style.border = "0";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            this.innerHTML = "";  
            this.appendChild(iframe);
        });
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

})
