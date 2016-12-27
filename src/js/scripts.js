$(document).ready(function(){
   // Materialize pack
   $('.button-collapse').sideNav();
   $('.parallax').parallax();

   // Bootstrap pack
});


$('.btn').click(function(){
   change_color();
});

function change_color() {
   $('.page-title').css('color','orange');
}
