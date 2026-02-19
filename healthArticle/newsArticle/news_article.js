var xhr = new XMLHttpRequest();

var url = './news_article.json';
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        var newsArticles = xhr.response.news_articles;
        var newsArticlesDiv = document.getElementById('articles');

        newsArticles.forEach(article => {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');


            var title = document.createElement('h2');
            title.textContent = article.title;


            var description = document.createElement('p');
            description.textContent = article.description;


            var categories = document.createElement('h3');
            categories.textContent = 'Categories:';
            var categoriesList = document.createElement('ul');
            article.categories.forEach(function (category) {
                var listItem = document.createElement('li');
                listItem.textContent = category;
                categoriesList.appendChild(listItem);
            });


            var highlights = document.createElement('h3');
            highlights.textContent = 'Highlights:';
            var highlightsList = document.createElement('ul');
            article.highlights.forEach(function (highlight) {
                var listItem = document.createElement('li');
                listItem.textContent = highlight;
                highlightsList.appendChild(listItem);
            });
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(categories);
            articleDiv.appendChild(categoriesList);
            articleDiv.appendChild(highlights);
            articleDiv.appendChild(highlightsList);
            newsArticlesDiv.appendChild(articleDiv);
        })
    }
}

xhr.send();