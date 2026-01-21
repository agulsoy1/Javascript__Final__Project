const homeSearchBtn = document.querySelector(".header__search--icon");
const homeSearchBar = document.querySelector(".header__search--bar");

if(homeSearchBtn){   
    homeSearchBtn.addEventListener('click', function(event){
        if(event.type === "click"){
            event.preventDefault();
            showMovieBrowser();
        }
    });
}

if(homeSearchBar){
    homeSearchBar.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            showMovieBrowser();
        }
    });
}
    
function showMovieBrowser(){
    const homeSearchTerm = homeSearchBar ? homeSearchBar.value: "";
    localStorage.setItem("query", homeSearchTerm);
    window.location.href = `${window.location.origin}/movie.html#`;
}

function openMenu(){
    document.body.classList += " menu--open";
}

function closeMenu(){
    document.body.classList.remove("menu--open");
}