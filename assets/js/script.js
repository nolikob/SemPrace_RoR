var buildings = document.querySelectorAll(".building");

buildings.forEach(function(element) {
    var btn = element.querySelector(".btnShow");
    var building = element.querySelector(".more-info")
    btn.addEventListener("click",function(){
        building.classList.toggle("hidden");
    })
});

var uls = document.querySelectorAll('.rooms');

uls.forEach(function(element) {
  var lis = element.querySelectorAll('li');
  lis.forEach(function(li) {
    var prevContent = li.innerHTML;
    li.innerHTML += "<a href=\"rooms.html\"> Zobraz rozvrh </a>";
  })
});
