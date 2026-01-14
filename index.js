const homeSearchBtn = document.querySelector(".header__search--icon");
const homeSearchBar = document.querySelector(".header__search--bar");
const homeSearchTerm = homeSearchBar.value;

function movieBrowser(query){
    localStorage.setItem("query", homeSearchTerm);
    homeSearchBtn.addEventListener('click', function(event){
        if(event.type === "click"){
            event.preventDefault();
            showMovieBrowser();
        }
    })
    searchBar.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            showMovieBrowser();
        }
    })
    window.location.href = `${window.location.origin}/movie.html#`;
    searchMovies();
};

// searchMovies();

function showMovieBrowser(){
    // searchMovies(searchTerm);
    console.log(searchMovies())
    window.location.href = `${window.location.origin}/movie.html#`;
}