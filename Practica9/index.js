const task = document.getElementById("task");
const list = document.querySelector(".lists");

function clicked() {
    if (task.value==="") {
        alert("Que no ves que no tienes nada")
        
    } else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        task.value = "";
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    saveData();

    
}

list.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData() {
    localStorage.setItem("data", list.innerHTML);
    
}
function getData() {
    list.innerHTML = localStorage.getItem("data");
    
}

getData();