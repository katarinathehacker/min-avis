
function klikkLink() {
    const dropdownElm = document.querySelector(".dropdown-content")

    if (dropdownElm.style.display === "none") {
        dropdownElm.style.display = "flex";
    } else {
        dropdownElm.style.display = "none";
    }
}
