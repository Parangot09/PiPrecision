const toggglebutt = document.getElementsByClassName("toggle_btn")[0]
const navbarlinks = document.getElementsByClassName("navbar-links")[0]

toggglebutt.addEventListener("click",function(event){
    event.preventDefault(); 
    navbarlinks.classList.toggle("active")
})