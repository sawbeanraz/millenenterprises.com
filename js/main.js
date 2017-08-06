$(function() {

  $('#productCarousel').owlCarousel({
    center: true,
    loop: true,
    autoWidth: true,
    margin: 20
  });


  $('#clientsCarousel').owlCarousel({
    autoWidth: true,
    center: true,
    loop: true,
    margin: 200
  });

  var _mapLocation = { 
    lat: 27.687009,
    lng: 85.319910
  };

  var map = new GMaps($.extend({}, _mapLocation, {
    el: '#officeMap',  
    zoom: 17,
    scrollwheel: false,
    draggable: false
  }));

  map.addMarker($.extend({}, _mapLocation, {
    title: 'Millen Enterprises'
  }));


  $('#copyrightYear').text(new Date().getFullYear());



  $('a[href*="#"]:not([href="#"], [data-toggle="collapse"])').click(function(e) {
    // console.log('LOCATION', location);
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);        
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        // console.warn(target.offset().top - 80);
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 800);
        return false;
      }
    }
  });

  /** jump scroll on navigation */
  var target = $(window.location.hash);    
  if(target.length) {      
    setTimeout(function() {
      window.scrollTo(0, 0);        
    }, 1);
    setTimeout(function() {        
      $('html, body').animate({
        scrollTop: target.offset().top - 220          
      }, 'slow');
    }, 100);
  }

});