// This is a placeholder JavaScript file
// You can add interactive features here

// Example: Log a message to the console
console.log("Welcome to the Research Directorate website!");

// Example: Basic interactivity
document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll("article");
    articles.forEach(function(article) {
        article.addEventListener("click", function() {
            alert("You clicked on an article.");
        });
    });
});
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
$(document).ready(function() {
  $('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });
});
