function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('article');
    
    let hasResults = false; // Flag to check if there are any matching articles
    
    articles.forEach(article => {
        const title = article.querySelector('h4').innerText.toLowerCase();
        const content = article.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            article.style.display = 'block'; // Show matching articles
            hasResults = true;
        } else {
            article.style.display = 'none'; // Hide non-matching articles
        }
    });

    // Show or hide the "No results found" message
    const noResults = document.getElementById('noResults');
    if (noResults) {
        if (hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    }
}
