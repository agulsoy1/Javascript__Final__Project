const searchTerm = document.querySelector(".browse__searchbar");
const movieDisplayELem = document.querySelector(".movie__display");
const releaseDate = document.querySelector("movie__year");
const loading = document.querySelector(".movie__loading--state");
const searchBtn = document.querySelector(".browse__search--icon");
const query = localStorage.getItem("query");

function showLoading(){
    // movieDisplayELem.classList += " movie__display--hidden";
    loading.classList += " loading__state";
}

async function searchMovies(event){
    const query = searchTerm.value;
    const response = await fetch(`https://www.omdbapi.com/?apikey=6d4005a9&s=${query}`);
    const movieData = await response.json();
    // console.log(movieData.Search);
    searchBtn.addEventListener('click', function(event){
        if(event.type === "click"){
            loading.classList += " loading__state--hidden";
            searchMovies();
            movieDisplayELem.classList.remove("movie__display--hidden");
            // movieDisplayELem.innerHTML = movieData.Search.map((movie) => displayMovies(movie)).join("");
        }
    })
    searchTerm.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            // movieDisplayELem.innerHTML = movieDisplayELem.classList.remove("movie__loading--state");
            // loading.classList.remove("loading__state");
            searchMovies();
            // !showLoading();
            // fetchData();
            loading.classList += " loading__state--hidden";
            movieDisplayELem.classList.remove("movie__display--hidden");
            // movieDisplayELem.innerHTML = movieData.Search.map((movie) => displayMovies(movie));
        }
        // searchMovies();
    });
    movieDisplayELem.innerHTML = movieData.Search.map((movie) => displayMovies(movie)).join("");
}

function displayMovies(movie){
    movie = `<div class="movie__display">
                    <figure class="movie__poster--wrapper">
                        <img src="${movie.Poster}" class="movie__poster" alt="">
                    </figure>
                    <div class="movie__info">
                        <h3 class="movie__title">${movie.Title}</h3>
                        <div class="movie__year">${movie.Year}</div>
                    </div>
                </div>`
    return movie;
}


function fetchData(){
    showLoading();
    movieDisplayELem.classList += " movie__display--hidden";
    setTimeout(() => {
        searchMovies();
    });
}

fetchData();

function showHomePage(){
    // console.log(window.location)
    window.location.href = `${window.location.origin}/index.html#`
}