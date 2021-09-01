let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}];


let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEL = document.getElementById("siteUrlInput");
let nameerrEl = document.getElementById("siteNameErrMsg");
let urlerrEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn")
let bookmarksListdiv = document.getElementById("bookmarksList")

function createandAppend(bookmarkObj) {
    let liElement = document.createElement("li");
    liElement.classList.add("bookmarkelement", "d-flex", "flex-row");
    bookmarksListdiv.appendChild(liElement);

    let sitenameEl = document.createElement("h1");
    sitenameEl.textContent = bookmarkObj.name;
    sitenameEl.classList.add("h1element");
    liElement.appendChild(sitenameEl);

    let btndivElement = document.createElement("div");
    btndivElement.classList.add("btndivElement", "ml-auto");
    liElement.appendChild(btndivElement);

    let anchroEl = document.createElement("a");
    anchroEl.href = bookmarkObj.url;
    anchroEl.target = "_blank";
    liElement.appendChild(anchroEl);


    let sitelinkbtnEl = document.createElement("button");
    sitelinkbtnEl.textContent = "Visit";
    sitelinkbtnEl.classList.add("btn", "btn-primary");
    anchroEl.appendChild(sitelinkbtnEl);
}

let bookmarkObj = {
    bookmarkId: "",
    name: "",
    url: "",
};

function getdata() {
    if (siteNameInputEl.value === "") {
        nameerrEl.textContent = "Required*"
    } else if (siteUrlInputEL.value === "") {
        urlerrEl.textContent = "Required*"
    } else {
        nameerrEl.textContent = ""
        urlerrEl.textContent = ""
        let lengthOfBookmarks = bookmarks.length;

        bookmarkObj.bookmarkId = "bookmark" + (lengthOfBookmarks + 1);

        siteNameInputEl.addEventListener("change", function(evnet) {
            bookmarkObj.name = siteNameInputEl.value

        })
        bookmarkObj.name = siteNameInputEl.value
        siteNameInputEl.value = ""

        siteUrlInputEL.addEventListener("change", function(evnet) {
            bookmarkObj.url = siteUrlInputEL.value
        })
        bookmarkObj.url = siteUrlInputEL.value
        siteUrlInputEL.value = ""

        bookmarks.push(bookmarkObj)
        createandAppend(bookmarkObj)
    }
}
submitBtnEl.addEventListener("click", getdata)

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault()
})