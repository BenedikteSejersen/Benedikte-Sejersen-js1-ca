setTimeout(function() {
    const container = document.querySelector(".about");

    let newHtml = "";

    newHtml += `<blockquote>
                    <p>
                        Today, with the rise of REST and web services over HTTP, the term is often assumed to refer to APIs of such services when given no other context.
                    </p>
                    <p>
                        The term API is, by extension, used to refer to the subset of software entities (code, subcomponents, modules, etc.) that serve to actually implement the API of some
                        encompassing component or system.
                    </p>
                    <p>
                        <cite>
                            <a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank">Wikipedia</a>
                        </cite>
                    </p>
                </blockquote>`;

    container.innerHTML = newHtml.replace(/the/g,"banana").replace(/The/g,"Banana");
    console.log(newHtml);
}, 3000);