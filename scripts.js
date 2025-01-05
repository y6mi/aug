
document.addEventListener("DOMContentLoaded", () => {
    const logoImage = document.querySelector("#logo img");

    logoImage.addEventListener("click", () => {
        console.log("Logo clicked!");

        logoImage.classList.add("pop-spin");

        logoImage.addEventListener("animationend", () => {
            logoImage.classList.remove("pop-spin");
        }, { once: true });
    });
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["AWFUL", "UGLY", "GREEDY", "..."],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// disable right clicking on the image
document.querySelector('.logo img').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// yt thumbnail event
document.querySelector('.video-thumbnail').addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=Ps0dIDMhUzg&ab_channel=AUGRecords', '_blank');
});


//menu icon click listener
document.querySelector('.menu-icon').addEventListener('click', () => {
    const popupMenu = document.querySelector('.popup-menu');
    popupMenu.style.display = (popupMenu.style.display === 'flex') ? 'none' : 'flex';
});


//popup menu close butn
document.querySelector('.close-menu').addEventListener('click', () => {
    const popupMenu = document.querySelector('.popup-menu');
    popupMenu.style.display = 'none';
});
