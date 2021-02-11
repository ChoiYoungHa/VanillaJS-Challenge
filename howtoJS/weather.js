const API_KEY = 'd3341bf154506acda418dfd7ce66eb7c';
const COORDS = 'coords'
const weather = document.querySelector(".js-weather");


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json()
    }).then(function(json){
        const temp = json.main.temp;
        const location = json.name;
        weather.innerText = `${temp}°C At ${location}`;
        
    });
}

function saveCoorsObj(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude; // position 객체에서 위도
    const longitude = position.coords.longitude; // 경도 읽어오기
    const coordsObj = {
        latitude, // 각 name값 value값이 같으면 그냥 하나만 적어도 된다고함.
        longitude
    };

    saveCoorsObj(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("I don't Know");
}

function askforCoors(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askforCoors();
    } else{
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();