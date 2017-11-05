var buildings = document.querySelectorAll('.building');
var uls = document.querySelectorAll('.rooms');

  buildings.forEach(function(element) {
      var btn = element.querySelector('.btnShow');
      var building = element.querySelector('.more-info')
      if (element.querySelector('.btnShow') !== null) {
        btn.addEventListener('click',function(){
            building.classList.toggle('hidden');
        })
      }
  });
uls.forEach(function(element) {
  var lis = element.querySelectorAll('li');
  lis.forEach(function(li) {
    prevContent = li.innerHTML;
    li.innerHTML += '<a href=\"schedule.html\"> Zobraz rozvrh </a>';
  })
});

function toggleView() {
  document.querySelector('.whole-area').classList.toggle('hidden');
}
var dateToday = document.querySelector('#dateToday');
if (dateToday !== null) {
  var d = new Date();
  dateToday.textContent += d.toLocaleDateString();
}
