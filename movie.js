const searchBar = document.querySelector(".browse__searchbar");
const movieDisplayELem = document.querySelector(".movie__display");
const releaseDate = document.querySelector(".movie__year");
const loading = document.querySelector(".movie__loading--state");
const searchBtn = document.querySelector(".browse__search--icon");
const optionSelect = document.querySelector("#years");
const query = localStorage.getItem("query");

movieDisplayELem.classList += " movie__display--hidden";
loading.classList += " loading__state";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  if (query !== null) {
    searchBar.value = query;
    localStorage.removeItem("query");
    fetchData();
  }
});

searchBtn.addEventListener("click", function (event) {
  if (event.type === "click") {
    event.preventDefault();
    fetchData();
  }
});

searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchData();
  }
});

function showLoading() {
  loading.classList += " loading__state";
}

async function searchMovies(event) {
  const searchTerm = searchBar.value;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=6d4005a9&s=${searchTerm}`
  );
  movieData = await response.json();
  console.log(movieData);
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
    movieDisplayELem.classList.remove("movie__display--hidden");
    loading.classList += " loading__state--hidden";
    searchMovies();
  });
}

function showHomePage() {
  window.location.href = `${window.location.origin}/index.html#`;
}

optionSelect.addEventListener('change', async (event) => {
    const data = await searchMovies();
    const year = data.Search[0].Year;
    console.log(year);
    // const selectedOption = event.target.value;
    // console.log(selectedOption);
    // if(movieData){
    //     console.log(movieData);
    // }

    // switch(selectedOption){
    //     case 'None':
    //         movieDisplayELem.style.display = 'block';
    //         break;
    //     case '1950s':
    //         if(1950 <= year && year <= 1959){
    //             movieDisplayELem.style.display = 'block';
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '1960s':
    //         if(1960 <= year && year <= 1969){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '1970s':
    //         if(1970 <= year && year <= 1979){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '1980s':
    //         if(1980 <= year && year <= 1989){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '1990s':
    //         if(1990 <= year && year <= 1999){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '2000s':
    //         if(2000 <= year && year <= 2009){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '2010s':
    //         if(2010 <= year && year <= 2019){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    //     case '2020s':
    //         if(2020 <= year && year <= 2024){
    //             movieDisplayELem.style.display = 'block';    
    //         }else{
    //             movieDisplayELem.style.display = 'none';
    //         }
    //         break;
    // }
})