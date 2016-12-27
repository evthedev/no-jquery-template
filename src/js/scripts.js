document.addEventListener("DOMContentLoaded", function(event) {

   // Ideal Image Slider
   var slider = new IdealImageSlider.Slider({
      selector: '#slider',
      interval: '4000',
      effect: 'slide'
   });

   slider.start();

});

$(document).ready(function(){

   // Materialize pack
   // $('.parallax').parallax();

   // Bootstrap pack

});

$('.btn').click(function(){
   change_color();
});

function change_color() {
   $('.page-title').css('color','orange');
}
