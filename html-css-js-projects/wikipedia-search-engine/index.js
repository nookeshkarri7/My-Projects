let searchInputElement = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createandappend(result) {
    let {
        title,
        link,
        description
    } = result;
    let divElement = document.createElement("div");
    divElement.classList.add("result-item");
    searchResultsEl.appendChild(divElement);

    let anchortitleEle = document.createElement("a");
    anchortitleEle.classList.add("result-title");
    anchortitleEle.textContent = title;
    anchortitleEle.href = link;
    anchortitleEle.target = "_blank";
    divElement.appendChild(anchortitleEle)

    let breakEle = document.createElement("br");
    divElement.appendChild(breakEle)

    let linkEl = document.createElement("a");
    linkEl.classList.add("result-url");
    linkEl.textContent = link;
    linkEl.href = link;
    linkEl.target = "_blank";
    divElement.appendChild(linkEl)

    let breakEle2 = document.createElement("br");
    divElement.appendChild(breakEle2)

    let descriptionEle = document.createElement("p");
    descriptionEle.textContent = description;
    descriptionEle.classList.add("link-description")
    divElement.appendChild(descriptionEle)

    let breakEle3 = document.createElement("hr");
    divElement.appendChild(breakEle3)

}


function displayresults(search_results) {
    spinnerEl.classList.toggle("d-none")
    for (let result of search_results) {
        createandappend(result)
    }
}


function searchwiki(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none")
        searchResultsEl.textContent = ""
        let searchinput = searchInputElement.value;
        searchInputElement.value = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchinput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayresults(search_results)
            })
    }
}


searchInputElement.addEventListener("keydown", searchwiki);