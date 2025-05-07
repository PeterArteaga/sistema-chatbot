

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

/*let menuList = document.getElementById("menuList")
menuList.style.maxHeight="0px";

    function toggleMenu(){
        if(menuList.style.maxHeight = "0px")
            {
                menuList.style.maxHeight = "1100px";
            }
        else{
            menuList.style.maxHeight = "0px";
            }
        }
   */     
/*
document.addEventListener("DOMContentLoaded", () => {
    const checkbtn = document.querySelector(".checkbtn");
    const menuList = document.getElementById("menuList");
        
    checkbtn.addEventListener("click", () => {
        menuList.classList.toggle("show");
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const checkbtn = document.querySelector(".checkbtn");
    const menuList = document.getElementById("menuList");
    const navLinks = document.querySelectorAll("#menuList li a"); // Selecciona todos los enlaces del menú

    // Alternar el menú al hacer clic en el botón de hamburguesa
    checkbtn.addEventListener("click", () => {
        menuList.classList.toggle("show");
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuList.classList.contains("show")) {
                menuList.classList.remove("show");
            }
        });
    });
});
