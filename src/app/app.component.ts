import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-pipes-app';
  public name = "Gokul angular";
  public message = "Welcome to angular";
  day=new Date();
  country:any=['india','europe','usa']
  asyncPromise!: Promise<string>;
  asyncObservable!: Observable<string>;


  public person={
    "firstName": "gokul",
    "lastName": "angular"
  }

  public date = new Date();
  

  ngOnInit() {


    this.asyncPromise = this.makePromise('Async Promise');
    this.asyncObservable = this.makeObservable('Async Observable');
  }

  add(value: any){
    this.country.push(value);
    console.log(this.country);
  }
  makePromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 8000);
    })
  }

  makeObservable(value: string): Observable<string> {
    return of(value).pipe(delay(4000));
  }
}
