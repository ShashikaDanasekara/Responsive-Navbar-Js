const navToggler = document.querySelector(".navbar-toggle");

navToggler.addEventListener("click", navToggle)
function navToggle(){
    console.log("clicked")
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav")
    nav.classList.toggle("open");
}