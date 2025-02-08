function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menuButton");

    sidebar.classList.toggle("open");

    // Change button text based on sidebar state
    if (sidebar.classList.contains("open")) {
        button.innerHTML = "✖ Close Menu";  // Show close icon and text
    } else {
        button.innerHTML = "☰ Open Menu";  // Show open icon and text
    }
}
// Function to adjust the zoom level of the page based on the width of the window
function adjustZoomBasedOnWidth() {
    // Get the width of the window
    const width = window.innerWidth;

    // If the width is between 992 and 1600 pixels, set the zoom level to 90%
    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = '90%';
    // If the width is between 700 and 767 pixels, set the zoom level to 80%
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = '80%';
    } else if (width >= 600 && width < 700) {
        document.body.style.zoom = '75%';
    } else if (width <= 600) {
        document.body.style.zoom = '50%';
    } else {
        document.body.style.zoom = '100%'; // Default zoom level
    }
}

// Adjust zoom on page load
window.addEventListener('load', adjustZoomBasedOnWidth);

// Adjust zoom on window resize
window.addEventListener('resize', adjustZoomBasedOnWidth);
