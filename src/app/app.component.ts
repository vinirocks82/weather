//import { Component } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
  //title = 'weatherApp';
//}
export class AppComponent implements OnInit, OnDestroy {
  title(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  cities = ["Edmonton", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  cityControl: FormControl;
  cities$: Observable<string>;


  constructor(private router: Router) {}

  ngOnInit() {
    
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);

      });

  }

  ngOnDestroy() {
  }
}

