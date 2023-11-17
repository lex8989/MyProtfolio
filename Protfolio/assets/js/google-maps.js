function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 51.20858101539152, lng: 6.9751999991748415};  // 51.20858101539152, 6.9751999991748415

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Erkrath' // Title Location
    });
}