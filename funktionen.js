function openMenu() {
    document.getElementById("myMenu").style.height = "100%"
}

function closeMenu() {
    document.getElementById("myMenu").style.height = "0%"
}

const GTInput = document.querySelectorAll(".gt-input");

for (let i = 0; i < GTInput.length; i++) {
    let currentLabel = GTInput[i]
    .parentElement.firstElementChild;

    GTInput[i].addEventListener("focus", function() {
        currentLabel.classList.add("move-up");
    })

    GTInput[i].addEventListener("blur", function() {
        currentLabel.classList.remove("move-up");
    })
}