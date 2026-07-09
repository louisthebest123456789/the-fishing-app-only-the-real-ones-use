function saveFish() {
    let fish = document.getElementById("fish").value;
    let size = document.getElementById("size").value;

    if (fish === "" || size === "") {
        document.getElementById("result").innerHTML =
        "Please enter your fish details 🎣";
        return;
    }

    document.getElementById("result").innerHTML =
    "🐟 Saved catch: " + fish + " - " + size + "cm! Great work!";
}


function score() {

    let total = 0;

    if (document.getElementById("rocks").checked) {
        total += 30;
    }

    if (document.getElementById("mangroves").checked) {
        total += 30;
    }

    if (document.getElementById("current").checked) {
        total += 40;
    }

    document.getElementById("score").innerHTML =
    "🐟 Bream Score: " + total + "/100";
}
