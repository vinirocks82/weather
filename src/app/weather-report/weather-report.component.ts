import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any>;
  today: Date = new Date();
  weatherData : any;
  loading = false;

  constructor(private weatherService: WeatherServiceService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params.locationName),
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      concatMap(name => {return this.weatherService.getWeatherForCity(name)}),
      tap((res) => {
        this.weatherData = res;
        this.loading = false;
      })
    );
  }
}
