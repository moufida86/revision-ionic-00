import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
public name="Rama";
age = 12;
buttonColor= "primary";

  constructor() { }

  getOlder(){
    this.age++;
    if(this.age >= 18)
    this.buttonColor="danger";
  }

  ngOnInit() {
  }

}
