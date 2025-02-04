const btn = document.querySelector(".js-plus");
const cont = document.querySelector(".conteneur-transport");

btn.addEventListener("click", toggle);

function toggle(){
    cont.classList.toggle("conteneur-transport-invisible");
}