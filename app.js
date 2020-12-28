let counter = 0;

let images = document.querySelectorAll(".img");

setInterval(imageDisplay, 5000);

function imageDisplay() {
    images[counter].style.display = "none";

    counter++;

    if (counter == images.length) {
        counter = 0;
    }

    images[counter].style.display = "block";

}