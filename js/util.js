$(document).ready(function(){
  $("#go-to-about").click(function(e){  
    scroll('#about-me', e, 900);
  });
  $("#go-to-portfolio").click(function(e){  
    scroll('#portfolio', e, 1200);
  });
  $("#go-to-contact").click(function(e){  
    scroll('#contact', e, 1500);
  });
});

function scroll(el, event, time) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: $(el).offset().top }, time);
}
