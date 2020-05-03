const queryStringValue = document.location.search;
const parameter = new URLSearchParams(queryStringValue);
console.log(queryStringValue);

let id;

if(parameter.has("id")) {
    id = parameter.get("id");
} else {
    document.location.href = "/";
}

const storefrontApiKey = {
    "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "b2ab2ddc3emshe6f25014aba8dbfp187860jsndf38b0aefccc"
    }
};

const corsUrl = "https://noroffcors.herokuapp.com/";
const baseUrl = "https://rawg-video-games-database.p.rapidapi.com/";
const storefrontUrl = `${baseUrl}stores/`;
const detailsUrl = corsUrl + storefrontUrl + id;

async function fetchDetailsPage () {
    const h1 = document.querySelector("h1");
    const property = document.querySelectorAll("p");

    try {
        const response = await fetch(detailsUrl, storefrontApiKey);
        const json = await response.json();
        // console.dir(json);

        createDetailsPage(json);

    } catch (error) {
        h1.innerHTML = "An error has occured";
        h1.style.color = "red";
        console.log(error);
    } 
}
fetchDetailsPage();

function createDetailsPage(details) {
    console.dir(details);
    
    
    const h1 = document.querySelector("h1");
    h1.innerHTML = details.name;

    const storefrontDomain = document.querySelector("#storefrontDomain");
    storefrontDomain.innerHTML = details.domain;

    const storefrontDescription = document.querySelector("#storefrontDescription");
    const detailsDescription = details.description;
    storefrontDescription.innerHTML = detailsDescription;

    const detailsBackgroundImage = document.querySelector(".details-image");
    // detailsBackgroundImage.innerHTML = details.image_background;
    detailsBackgroundImage.style.backgroundImage = `url(${details.image_background})`;
    console.log(details.image_background);

    document.title = details.name;
}
