// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Map button IDs to their target pages
    const buttonRoutes = {
        btnAddContent: "contribute.html",
        btnRequests: "requests.html",
        btnAdminPanel: "admin-panel.html",
        btnManuals: "manuals.html",
        btnLearnMore: "about.html",
    };

    // Attach event listeners to buttons
    Object.keys(buttonRoutes).forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => {
                window.location.href = buttonRoutes[buttonId];
            });
        }
    });

    // Handle entry title toggling
    const entries = document.querySelectorAll(".entry");

    entries.forEach((entry) => {
        const titleButton = entry.querySelector(".entry-title");
        const details = entry.querySelector(".entry-details");
        const dropdownIndicator = titleButton.querySelector(".dropdown-indicator");

        titleButton.addEventListener("click", () => {
            const isVisible = details.style.display === "block";
            details.style.display = isVisible ? "none" : "block";

            // Update the "+" to "-" and vice versa
            dropdownIndicator.textContent = isVisible ? "＋" : "−";
        });
    });

    // Handle view more buttons
    const viewMoreButtons = document.querySelectorAll(".view-more");

    viewMoreButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Redirecting to page for Entry ${index + 1}`);
        });
    });
});
