import {getForecast} from './forecastAPI';

describe('getForecast',()=>{
    it('should return a Object',async ()=>{
        fetch = jest.fn();
        fetch.mockImplementationOnce(()=>Promise.resolve({json:jest.fn(()=>Promise.resolve())}));
        const response =  await getForecast();

        expect(response).toEqual(expect.any(Object))
    });

    it('should make a request',async()=>{
        fetch = jest.fn();
        fetch.mockImplementationOnce(()=>Promise.resolve({json:jest.fn(()=>Promise.resolve())}));
        const response =  await getForecast();

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    describe('the request',()=>{
        it('should make the request to the proper URL endpoint',async()=>{
            fetch = jest.fn();
           fetch.mockImplementationOnce(()=>Promise.resolve({json:jest.fn(()=>Promise.resolve({}))}));
            const response =  await getForecast();
    
            expect(fetch).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6a3c56089632a3cd9af5bd986a812c22');
        });
        
        it('should make the request with the city passed by arguments to `getForecast`',async()=>{
            fetch = jest.fn();
           fetch.mockImplementationOnce(()=>Promise.resolve({json:jest.fn(()=>Promise.resolve({}))}));
            const response =  await getForecast('miami');
        
            expect(fetch).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/weather?q=miami&appid=6a3c56089632a3cd9af5bd986a812c22');
        });
    });

    describe('the response',()=>{
        it('should containg object with main issues and location coord.',async ()=>{
            const endpointResponse = {
                "coord":{"lon":-0.13,"lat":51.51},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
                "base":"stations",
                "main":{"temp":279.85,"pressure":1011,"humidity":65,"temp_min":279.15,"temp_max":280.15},
                "visibility":10000,
                "wind":{"speed":2.1,"deg":130},
                "clouds":{"all":90},
                "dt":1522605000,
                "sys":{"type":1,"id":5168,"message":0.0029,"country":"GB","sunrise":1522560867,"sunset":1522607694},
                "id":2643743,
                "name":"London",
                "cod":200
            };
            fetch = jest.fn();
            fetch.mockImplementationOnce(()=>Promise.resolve({json:jest.fn(()=>Promise.resolve(endpointResponse))}));
            const response = {
                    lon:-0.13,
                    lat:51.51,
                    temp:279.85,
                    pressure:1011,
                    humidity:65,
                    temp_min:279.15,
                    temp_max:280.15,
            }
            
            const returnedResponse =  await getForecast();

            expect(response).toEqual(returnedResponse);
        })

    });
})