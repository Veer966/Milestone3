document.addEventListener("DOMContentLoaded", function() {
    const projectsDropdown = document.getElementById("projects-dropdown");
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";
    dropdownContent.innerHTML = `
        <a href="week1.html">Week 1</a>
        <a href="week2.html">Week 2</a>
        <a href="week3.html">Week 3</a>
        <a href="week4.html">Week 4</a>
        <a href="week5.html">Week 5</a>
    `;

    projectsDropdown.addEventListener("mouseenter", function() {
        dropdownContent.style.display = "block";
    });

    projectsDropdown.addEventListener("mouseleave", function() {
        dropdownContent.style.display = "none";
    });

    projectsDropdown.appendChild(dropdownContent);
});
