document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function () {
        changeLogoOnSticky()
    };

    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("img-logo")
    const sticky = navbar.offsetTop;

    // Switches between the full and mini logo when the user scrolls
    // and the nav bar reaches the top of the screen
    function changeLogoOnSticky() {
        if (window.scrollY >= sticky - 30) {
            logo.src = "../images/logo.svg"
        } else {
            logo.src = "../images/logo-full.svg"
        }
    }
});