const searchInput = document.getElementById('search');
const results = document.getElementById('results');
const searchButton = document.getElementById('button');

searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
    const search = searchInput.value;

    if(search){
        
        const formattedSearch = formatSearchString(search);
        const url = buildUrl(formattedSearch);

    return getGiphyResults(url)

    .then(function(gifs){
        console.log(gifs)
        gifs.forEach(function(gif) {
            const img = document.createElement('img')
            img.src = gif.images.fixed_height.url;
            img.alt =gif.title
            results.appendChild(img)
        })
    })

    }

}

function formatSearchString(search){
    return search.replace(/ /g, '+');
}

function buildUrl(search){
    const API_KEY = 'NHpctkNWyXE7vGQsHL9gklMraAZILane';
    const baseUrl = 'http://api.giphy.com/v1/gifs/search'; 
    return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

function getGiphyResults(url) {
    return fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            return data.data
        })
        .catch(function (error) {
            console.log(error)
        })

}