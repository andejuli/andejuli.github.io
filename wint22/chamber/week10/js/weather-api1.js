const apiURL = 'api.openweathermap.org/data/2.5/weather?id=5596475&appid=bc4bb35104ef8c70efd2262a7c121cfc';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });