import { Component, OnInit } from '@angular/core';

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


  public person={
    "firstName": "gokul",
    "lastName": "angular"
  }

  public date = new Date();
  

  ngOnInit(): void {
      
  }

  add(value: any){
    this.country.push(value);
  }
}
