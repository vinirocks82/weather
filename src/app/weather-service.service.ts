import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) {}
  getWeatherForCity(city: string): Observable<any> {
    const path = `http://api.weatherapi.com/v1/current.json?key= 259a17188c0748a9800184252212709&q=edmonton&aqi=no
    `;
    
    console.log(path);    
    return this.http.get(path);
    
  }
}
