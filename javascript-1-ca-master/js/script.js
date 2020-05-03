const corsUrl = "https://noroffcors.herokuapp.com/";
const baseUrl = "https://rawg-video-games-database.p.rapidapi.com/stores" 
 const apiKey = {
                    "headers": {
                        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                        "x-rapidapi-key": "b2ab2ddc3emshe6f25014aba8dbfp187860jsndf38b0aefccc"
                    }
                };
const storefrontUrl = corsUrl + baseUrl; 

async function fetchStorefrontUlr() {
    const h1 = document.querySelector("h1");

    try {
    const response = await fetch(storefrontUrl, apiKey);
    const details = await response.json();

    const storefront = details.results;
    //console.dir(storefrontName);

    createStorefront(storefront);

    } catch (error) {
        h1.innerHTML = "An error has occured";
        h1.style.color = "red";
        console.log(error);
    } finally {
        const loader = document.querySelector(".loader");
        const loaderContainer = document.querySelector(".row");
        loaderContainer.removeChild(loader);
    }
}
fetchStorefrontUlr();

function createStorefront(storefront) {
    const container = document.querySelector(".results");

    let storefrontHtml = "";

   for (let i = 0; i < storefront.length; i++) {
       //console.log(storefront[i].name);
       //console.log(storefront[i].image_background);
       //console.log(storefront[i].domain)
       //console.log(storefront[i].games_count)

        let undefinedValue = "Storefront not found";

        if(storefront[i].name) {
         undefinedValue = storefront[i].name;
        } else {
            storefront[i].name;
        }

       storefrontHtml += `<div class="card">
                                <img class="image" src="${storefront[i].image_background}" alt="Title/Name" />
                                <div class="details">
                                    <h4 class="name">${storefront[i].name}</h4>
                                    <p><b>Domain:</b> ${storefront[i].domain}</p>
                                    <p><b>Games count:</b>${storefront[i].games_count}</p>
                                    <a class="btn btn-primary" href="details.html?id=${storefront[i].id}">Details</a>
                                </div>
                            </div>`;
    console.log(storefrontHtml);
   }
   container.innerHTML = storefrontHtml;
}