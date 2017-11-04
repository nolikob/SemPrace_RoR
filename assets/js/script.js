var buildings = document.querySelectorAll(".building");


  buildings.forEach(function(element) {
      var btn = element.querySelector(".btnShow");
      var building = element.querySelector(".more-info")
      if (element.querySelector(".btnShow") !== null) {
        btn.addEventListener("click",function(){
            building.classList.toggle("hidden");
        })
      }
  });


var uls = document.querySelectorAll('.rooms');

uls.forEach(function(element) {
  var lis = element.querySelectorAll('li');
  lis.forEach(function(li) {
    var prevContent = li.innerHTML;
    li.innerHTML += "<a href=\"schedule.html\"> Zobraz rozvrh </a>";
  })
});

function toggleView() {
  document.querySelector('.whole-area').classList.toggle('hidden');
}
