$(function() {
  var years = ['fourth year', 'third year', 'second year', 'first year'];
  var today = new Date();
  var index = 118 - today.getYear();
  document.getElementById("year").innerHTML = years[index - 1];
  switch (index){
    case 4:
      document.getElementById("year").style.color = "#893791";
      break;
    case 3:
      document.getElementById("year").style.color = "#ac73b2";
      break;
    case 2:
      document.getElementById("year").style.color = "#c49bc8";
      break;
    case 1:
      document.getElementById("year").style.color = "#e7d7e9";
      break;
    }
});
