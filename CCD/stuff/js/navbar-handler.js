var home = document.getElementsByTagName("a")[1];
var forum = document.getElementsByTagName("a")[2];
var order = document.getElementsByTagName("a")[3];
var account = document.getElementsByTagName("a")[4];

home.onclick = function () {
    forum.classList.remove("active");
    order.classList.remove("active");
    account.classList.remove("active");
    home.classList.add("active");
    document.getElementById("home").style.display = "block";
    document.getElementById("forum").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("account").style.display = "none";
}

forum.onclick = function () {
    home.classList.remove("active");
    order.classList.remove("active");
    account.classList.remove("active");
    forum.classList.add("active");
    document.getElementById("forum").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("account").style.display = "none";
}

order.onclick = function () {
    forum.classList.remove("active");
    home.classList.remove("active");
    account.classList.remove("active");
    order.classList.add("active");
    document.getElementById("order").style.display = "block";
    document.getElementById("forum").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("account").style.display = "none";
}

account.onclick = function () {
    forum.classList.remove("active");
    order.classList.remove("active");
    home.classList.remove("active");
    account.classList.add("active");
    document.getElementById("account").style.display = "block";
    document.getElementById("forum").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("home").style.display = "none";
}