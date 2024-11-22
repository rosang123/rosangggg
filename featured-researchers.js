// Array of featured researchers with their details
const researchers = [
    { name: "Maria Concepcion Birginias", photo: "images/researcher1.jpg" },
    { name: "Joyce Alejo", photo: "images/researcher2.jpg" },
    { name: "Kevin Jude Lasaten", photo: "images/researcher3.jpg" },
];

// Function to select a random researcher
function displayRandomResearcher() {
    const randomIndex = Math.floor(Math.random() * researchers.length); // Generate a random index
    const selectedResearcher = researchers[randomIndex];

    // Update the image and name dynamically
    const photoElement = document.getElementById("researcher-photo");
    const nameElement = document.getElementById("researcher-name");

    if (photoElement && nameElement) {
        photoElement.src = selectedResearcher.photo;
        photoElement.alt = selectedResearcher.name;
        nameElement.textContent = selectedResearcher.name;
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayRandomResearcher);
