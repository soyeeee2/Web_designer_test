$(document).ready(function(){
  console.clear();
  let SliderMove = 0;

  setInterval(function(){
    $(".slider").attr("data-index", SliderMove++ % 3);
  }, 3000);
});