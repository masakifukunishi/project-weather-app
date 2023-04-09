const favorite = () => {
  const city = document.getElementById("city").innerHTML;
  const lat = localStorage.getItem("lat");
  const lng = localStorage.getItem("lng");

  const favorite = {
    city,
    lat,
    lng,
  };

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  makeFavoriteList();
  switchFavoriteRemove();
};

const remove = () => {
  const city = document.getElementById("city").innerHTML;
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const newFavorites = favorites.filter((item) => item.city !== city);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  makeFavoriteList();
  switchFavoriteRemove();
};

const makeFavoriteList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const select = document.getElementById("favorites-select");
  select.innerHTML = "";
  // initial option
  const initial = document.createElement("option");
  initial.text = "Select a city";
  select.add(initial);

  favorites.forEach((item) => {
    const option = document.createElement("option");
    option.text = item.city;
    select.add(option);
  });
};

const selectFromFavoriteCity = () => {
  document.getElementById("city-input").value = "";
  const select = document.getElementById("favorites-select");
  if (select.selectedIndex === 0) return;
  const city = select.options[select.selectedIndex].text;
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favorite = favorites.find((item) => item.city === city);
  fetchWeatherData(favorite.lat, favorite.lng);
};

const switchFavoriteRemove = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const city = document.getElementById("city").innerHTML;
  document.getElementById("favorite").style.display = "block";
  document.getElementById("remove").style.display = "none";
  favorites.forEach((element) => {
    if (element.city === city) {
      document.getElementById("favorite").style.display = "none";
      document.getElementById("remove").style.display = "block";
    }
  });
};
