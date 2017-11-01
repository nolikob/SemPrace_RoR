var buildings = document.querySelectorAll(".building");

buildings.forEach(function(element) {
    var btn = element.querySelector(".btnShow");
    var building = element.querySelector(".rooms")
    btn.addEventListener("click",function(){
        building.classList.toggle("hidden");
    })
});