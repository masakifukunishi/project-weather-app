const script = document.createElement("script");
const googlePlaceApiKey = "AIzaSyBUhxt-zeH2E38JhtgLznz5vWYaOgFyhP8";
script.src = `https://maps.googleapis.com/maps/api/js?key=${googlePlaceApiKey}&libraries=places&callback=initMap`;
script.async = true;
document.head.appendChild(script);

function initMap() {
  const input = document.getElementById("city-input");
  const options = {
    types: ["(cities)"],
  };

  const autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    fetchWeatherData(lat, lng);
    // soojin - change 3 hour weather when you change the city
    threeHourRange(lat, lng);
  });
}
