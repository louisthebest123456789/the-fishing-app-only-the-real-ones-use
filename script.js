let xp = 0;

function showSection(section) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(section).classList.remove("hidden");
}


function addCatch() {

    let fish = document.getElementById("fishName").value;
    let size = document.getElementById("fishSize").value;
    let lure = document.getElementById("fishLure").value;

    if (fish === "") {
        alert("Add a fish species first!");
        return;
    }

    let catchCard = document.createElement("div");
    catchCard.className = "card";

    catchCard.innerHTML = `
        🐟 <b>${fish}</b><br>
        Size: ${size} cm<br>
        Lure: ${lure}
    `;

    document.getElementById("catchList").appendChild(catchCard);


    xp += 10;

    document.getElementById("xp").innerText = xp;


    updateLevel();
}



function addSpot() {

    let name = document.getElementById("spotName").value;
    let info = document.getElementById("spotInfo").value;


    if (name === "") {
        alert("Add a spot name first!");
        return;
    }


    let spotCard = document.createElement("div");

    spotCard.className = "card";


    spotCard.innerHTML = `
        📍 <b>${name}</b><br>
        ${info}
    `;


    document.getElementById("spotList").appendChild(spotCard);

}



function updateLevel() {

    let levelText = document.getElementById("level");


    if (xp >= 100) {
        levelText.innerText = "Level 3 Pro Angler 🏆";
    }

    else if (xp >= 50) {
        levelText.innerText = "Level 2 Skilled Angler 🎣";
    }

    else {
        levelText.innerText = "Level 1 Rookie 🎣";
    }

}
