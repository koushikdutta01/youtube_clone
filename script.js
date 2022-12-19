var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.oneclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
