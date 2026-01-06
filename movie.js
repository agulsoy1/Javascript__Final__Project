// const movieTagElement = document.querySelector(".movie__tag");
// const response = await fetch(`https://omdbapi.com/?apikey=6d4005a9&s=fast`);
// const searchTerm = document.querySelector(".browse__searchbar");
const searchTerm = document.querySelector(".browse__searchbar");
const movieTagElement = document.querySelector(".movie__tag");

async function searchMovies(event){
    const response = await fetch(`https://www.omdbapi.com/?apikey=6d4005a9&s=${searchTerm}`);
    const movieData = await response.json();
    console.log(movieData);
    movieTagElement.innerHTML = movieData.map((movie) => displayMovies(movie)).join("");
}

function displayMovies(movie){
    movie = `<div class="movie__tag">
                    <figure class="movie__poster--wrapper">
                        <img src="${movie.Poster}" class="movie__poster" alt="">
                    </figure>
                    <div class="movie__info">
                        <h3 class="${movie.Title}">Movie Title</h3>
                        <div class="${movie.Year}">Release Date</div>
                        <div class="${movie.imdbID}">IMDB ID: IMDBID</div>
                    </div>
                </div>`
    return movie;
}

searchMovies()

function showHomePage(){
    // console.log(window.location)
    window.location.href = `${window.location.origin}/index.html#`
}