function showNavDropdown() {
    hoverButton = document.getElementById("navDropdown");
    hoverButton.classList.remove("roundedBorder");
    hoverButton.classList.add("roundedTopBorder");
    
    resumeButton = document.getElementById("navResumeHover");
    resumeButton.classList.remove("hidden");
}

function hideNavDropdown() {
    hoverButton = document.getElementById("navDropdown");
    hoverButton.classList.add("roundedBorder");
    hoverButton.classList.remove("roundedTopBorder");

    resumeButton = document.getElementById("navResumeHover");
    resumeButton.classList.add("hidden");
}