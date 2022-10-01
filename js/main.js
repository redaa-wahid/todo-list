let creattext = document.querySelector(".input");
let button = document.querySelector(".container .text .button");
let task = document.querySelector(".task");

let creatarry = [];


if (localStorage.getItem("stats")) {
    creatarry = JSON.parse(localStorage.getItem("stats"));
}

getdata();






button.onclick = function() {
    if (creattext.value !== "") {
        textvalue(creattext.value);
        creattext.value = "";
    }
};




task.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        buttondell(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();

    }

});



function textvalue(taskText) {

    const stats = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };

    creatarry.push(stats);

    addElement(creatarry);
    addtolocalstorage(creatarry);


}


function addElement(arra) {
    task.innerHTML = "";

    creatarry.forEach((stats) => {
        let div = document.createElement("div");
        div.className = "div";

        div.setAttribute("data-id", stats.id);

        div.appendChild(document.createTextNode(stats.title));




        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("delete"));


        div.appendChild(span);

        task.appendChild(div);

    });
}

function addtolocalstorage(creatarry) {
    window.localStorage.setItem("stats", JSON.stringify(creatarry));
}

function getdata() {
    let data = window.localStorage.getItem("stats");
    if (data) {
        let stats = JSON.parse(data);
        addElement(stats);

    }
}


function buttondell(statId) {

    creatarry = creatarry.filter((stats) => stats.id != statId);
    addtolocalstorage(creatarry);

}