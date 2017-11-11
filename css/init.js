(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready


  var slideindex = 1;
  showDivs(slideIndex);

  function plusdivs(n){
    showdivs(slideindex += n);
  }

  function plusdivs(n){
    var i;
    var x =

  document.getelementsbyclassname ("myslides");
  if (n>x.lenth) {slideindex=1}
  if (n<1) {slideindex = x.length};
  for (i=0; i<x.length; i++) {
      x[i].style.display = "none";
  }
    x[slideindex-1].style.display="block";
  }
  
})(jQuery); // end of jQuery name space
