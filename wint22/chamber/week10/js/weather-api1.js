const apiURL = 'api.openweathermap.org/data/2.5/weather?id=5596475&appid=e6b8d481b3a497c7db7521cc35f46dda';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });