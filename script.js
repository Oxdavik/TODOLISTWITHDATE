const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const date = document.getElementById("date")

function AjoutTask(){
    if (inputBox.value=='' || date.value==''){
        alert("Vous ne pouvez pas insérer votre tâche  !");}
    else {
        let jour = document.createElement("date")
        jour.innerHTML = date.value;
        listContainer.appendChild(jour); 
        let li= document.createElement("li") 
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li)
        let del= document.createElement("del");
        del.innerHTML="\u00d7";
        li.appendChild(del);

    }
    inputBox.value ="";
    date.value =""; 
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'DEL') {
        const taskItem = e.target.parentElement;
        const dateItem = taskItem.previousElementSibling; 
        dateItem.remove(); 
        taskItem.remove(); 
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showList();
