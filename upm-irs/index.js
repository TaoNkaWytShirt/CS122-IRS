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

function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".material-icons");

  // Toggle the dropdown visibility
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
    icon.classList.remove("active");
  } else {
    dropdownMenu.style.display = "block";
    icon.classList.add("active");
  }
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".material-icons");

  if (!icon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
    icon.classList.remove("active");
  }
});

// Open the filter modal
function openModal() {
    document.getElementById("filterModal").style.display = "block";
  }
  
  // Close the filter modal
  function closeModal() {
    document.getElementById("filterModal").style.display = "none";
  }
  
  // Apply the filters (for now, just logs the selected values)
  function applyFilters() {
    const accessLevel = document.getElementById("accessLevel").value;
    const content = document.getElementById("content").value;
    const college = document.getElementById("college").value;
    const department = document.getElementById("department").value;
  
    console.log("Filters Applied:");
    console.log("Access Level:", accessLevel);
    console.log("Content:", content);
    console.log("College:", college);
    console.log("Department:", department);
  
    closeModal();
  }
  
  // Update department options based on selected college
  function updateDepartments() {
    const college = document.getElementById("college").value;
    const departmentSelect = document.getElementById("department");
    departmentSelect.innerHTML = ""; // Clear existing options
  
    let departments = [];
    if (college === "arts_sciences") {
      departments = ["Department of Psychology", "Department of Sociology", "Department of Literature"];
    } else if (college === "nursing") {
      departments = ["Department of Nursing Practice", "Department of Nursing Research"];
    }
  
    // Populate department select
    departments.forEach(department => {
      const option = document.createElement("option");
      option.value = department;
      option.textContent = department;
      departmentSelect.appendChild(option);
    });
  }
  
  // Trigger filter modal on button click
  document.getElementById("btnFilter").addEventListener("click", openModal);
  