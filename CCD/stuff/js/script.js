var modal = document.getElementById("account_creator");

var btn = document.getElementById("create");

var span = document.getElementsByClassName("close")[0];

modal.style.display = "none";

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}