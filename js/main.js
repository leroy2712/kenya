$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function initMap() {
    var kicc = {lat: -1.2886535, lng: 36.8210724}
    var serena = {lat: -1.2870243, lng: 36.8123345}

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: kicc
    });
    var marker = new google.maps.Marker({
      position: serena
    });
  }