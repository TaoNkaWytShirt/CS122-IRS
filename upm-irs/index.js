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
});

