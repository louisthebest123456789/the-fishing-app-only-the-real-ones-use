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
// The Fishing App Only The Real Ones Use
// Main app features

console.log("🎣 Fishing App loaded successfully!");


// Fishing tips button
function showMessage() {
  alert(
    "🎣 Fishing Tip:\n\n" +
    "Target structure like rocks, weed beds and drop-offs.\n" +
    "Slow your lure down and watch your line!"
  );
}


// Fish database
const fish = [
  {
    name: "Bream",
    bait: "Soft plastics, prawns, small hard bodies",
    spots: "Rock walls, bridges, creek mouths",
    colour: "Motor oil, natural, bloodworm"
  },

  {
    name: "Flathead",
    bait: "3-5 inch soft plastics",
    spots: "Sand flats, drop-offs, weed edges",
    colour: "Pink, white, natural colours"
  },

  {
    name: "Snapper",
    bait: "Soft plastics, pilchards, squid",
    spots: "Reefs, rubble, deeper structure",
    colour: "Nuclear chicken, pearl, red"
  },

  {
    name: "Jewfish",
    bait: "Large soft plastics, live bait",
    spots: "Deep holes, bridges, river mouths",
    colour: "Dark colours at night"
  }
];


// Search fish
function searchFish() {

  let search = prompt("What fish are you looking for?");

  if (!search) {
    return;
  }

  let result = fish.find(
    item => item.name.toLowerCase() === search.toLowerCase()
  );


  if (result) {

    alert(
      "🐟 " + result.name +
      "\n\nBest lures/baits: " + result.bait +
      "\n\nBest spots: " + result.spots +
      "\n\nGood colours: " + result.colour
    );

  } else {

    alert(
      "Sorry, we don't have that fish yet.\nMore species coming soon!"
    );

  }

}
