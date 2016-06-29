  function unleashSlider(container, interval, fadeTime) { // overall slider function

      var element = container; // get the container element, turn into element var

      if(interval == null) {
        var interval = 5000; // set the interval between fades
      }
        
      if(fadeTime == null) {
        var fadeTime = 500; // set the fade time
      }
    

      slideOut(element); // begin the slideOut process

      /*
      // BEGIN FUNCITONS THAT MAKE IT TICK
      */
    
      function slideOut(element, looping) { // slideOut Functionality, fades out the current slide

          if(looping != null) { // if looping already
              $slide = element; // $slide = the next slide
          } else { // otherwise the slide to fade out is the first child of the container
              $slide = $(element).find(">:first-child");
          }

          // grab the slide, delay using interval, then fade out
          $slide
              .delay(interval)
              .fadeOut(fadeTime, slideIn);

          // once faded out, callback to SlideIn for next slide

      } // end slideOut function

      function slideIn() { // slideIn Functionality, fades in the next one
          var $nextSlide = $(this).next(); // get next slide

          if ($nextSlide.length == 0) { // if end of slides

              $firstSlide = $(this).parent().find(">:first-child"); // "next slide" return to first child of the slideshow

              $firstSlide.fadeIn(fadeTime); // fade in the original slide

              slideOut($firstSlide, true); // now run the slideOut again setting looping to true

          } else {
              // if there is a next slide
              $nextSlide.fadeIn(fadeTime); // fade it in

              slideOut($nextSlide, true); // then run the fadeOut

          } // end else
      } // end slide in function
    
      /*
      // End Internal Functions
      */

  } // end slider function

$(document).ready(function() {

  unleashSlider('.home-slider-list', 3000, 500); // run the slider
  
}); // end doc ready


// CATEGORIES    DROPDOWN SHORT

$(".dropdown dd ul").hide();

$(".dropdown dt a").click(function() {

    $(".dropdown dd ul").toggle();

});

$(".dropdown dd ul li a").click(function() {

    var text = $(this).html();

    $(".dropdown dt a").html(text);

    $(".dropdown dd ul").hide();

}); 

$(document).bind('click', function(e) {

    var $clicked = $(e.target);

    if (! $clicked.parents().hasClass("dropdown"))

        $(".dropdown dd ul").hide();

});


//PARALLAX

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#home-slider').css('top',(0+(scrolled*.45))+'px');
}