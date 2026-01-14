const searchBar = document.querySelector(".browse__searchbar");
const movieDisplayELem = document.querySelector(".movie__display");
const releaseDate = document.querySelector("movie__year");
const loading = document.querySelector(".movie__loading--state");
const searchBtn = document.querySelector(".browse__search--icon");
const query = localStorage.getItem("query");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    if (query !== null) {
        searchBar.value = query;
        localStorage.removeItem("query");
        searchMovies();
    }
});

function showLoading() {
  // movieDisplayELem.classList += " movie__display--hidden";
  loading.classList += " loading__state";
}

async function searchMovies(event) {
  const searchTerm = searchBar.value;
  const searchTermValue = query || searchTerm;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=6d4005a9&s=${searchTermValue}`
  );
  const movieData = await response.json();
  searchBtn.addEventListener("click", function (event) {
    if (event.type === "click") {
        movieDisplayELem.classList.remove("movie__display--hidden");
        searchMovies();
        loading.classList += " loading__state--hidden";
    }
  });
  searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      movieDisplayELem.classList.remove("movie__display--hidden");
      searchMovies();
      loading.classList += " loading__state--hidden";
    }
  });
  movieDisplayELem.innerHTML = movieData.Search.map((movie) =>
    displayMovies(movie)
  ).join("");
}

function displayMovies(movie) {
  movie = `<div class="movie__display">
                    <figure class="movie__poster--wrapper">
                        <img src="${movie.Poster}" class="movie__poster" alt="">
                    </figure>
                    <div class="movie__info">
                        <h3 class="movie__title">${movie.Title}</h3>
                        <div class="movie__year">${movie.Year}</div>
                    </div>
                </div>`;
  return movie;
}

function fetchData() {
  showLoading();
  movieDisplayELem.classList += " movie__display--hidden";
  setTimeout(() => {
    searchMovies();
  });
}

fetchData();

function showHomePage() {
  window.location.href = `${window.location.origin}/index.html#`;
}
