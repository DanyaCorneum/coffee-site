const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");
const panelCoffe = document.getElementById("coffee");
const panelCake = document.getElementById("cake");
panelCoffe.classList.add("active");

function selectElement() {
  panelCake.classList.toggle("active");
  panelCoffe.classList.toggle("active");
}

btnNext.addEventListener("click", selectElement);
btnBack.addEventListener("click", selectElement);
console.log(btnNext);
