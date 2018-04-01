export default function getForecast(city="London"){
    const url = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey="6a3c56089632a3cd9af5bd986a812c22";
    return fetch(`${url}q=${city}&appid=${apiKey}`)
    .then(response =>({
            ...response.coord,
            ...response.main
        })
    );
}