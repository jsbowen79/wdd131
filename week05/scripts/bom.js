
const input = document.querySelector("input"); 
const button = document.querySelector("button"); 
const list = document.querySelector("ul");
 

button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value.trim());
        setChaptersList();
        input.value = "";
        setTimeout(() => input.focus(), 0);
    }
});

function displayList(item){       
    const entry = document.createElement("li");
    const del = document.createElement("button");
    entry.textContent = item;
    del.textContent = "❌";
    del.classList.add('delete'); 
    entry.appendChild(del);
    list.appendChild(entry);
    del.addEventListener("click", function ()
    {
        entry.remove();
        deleteChapter(item);
        setTimeout(() => input.focus(), 0);
            
    })
}; 

function setChaptersList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));

}; 

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter((item) => item !== chapter)
    setChaptersList();
}


    let chaptersArray = getChapterList() || []; 
    
    chaptersArray.forEach(chapter => {
        displayList(chapter); 
        
    }); 
    


