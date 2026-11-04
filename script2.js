
let size = 1;

function changeButton() {

    let button = document.getElementById("button");

    // Make button bigger
    size = size + 0.2;

    button.style.transform = `scale(${size})`;

    // Random position
    let randomX = Math.random() * 200 - 100;
    let randomY = Math.random() * 200 - 100;

    button.style.translate = `${randomX}px ${randomY}px`;

}