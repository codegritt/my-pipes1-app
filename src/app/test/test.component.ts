import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Gokul angular";
  public message = "Welcome to angular";
  public person={
    "firstName": "john",
    "lastName": "doe"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
