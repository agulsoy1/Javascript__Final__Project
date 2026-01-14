const homeSearchBtn = document.querySelector(".header__search--icon");
const homeSearchBar = document.querySelector(".header__search--bar");
const homeSearchTerm = homeSearchBar.value;

homeSearchBtn.addEventListener('click', function(event){
    if(event.type === "click"){
        event.preventDefault();
        showMovieBrowser();
    }
});

homeSearchBar.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        showMovieBrowser();
    }
});

function showMovieBrowser(){
    localStorage.setItem("query", homeSearchTerm);
    searchMovies(homeSearchTerm);
    window.location.href = `${window.location.origin}/movie.html#`;
}