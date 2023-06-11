import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Home title";
  buttonDisable: boolean = false;
  color: string = "green";
  newTitle: string = "test";

  public name = 'angular';
  public nr = 15;

  public person = {
    "first" : "dana",
    "second" : "popescu"
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeButton() : void
  {
    this.title = "New Title";
    this.color = "red";
  }

  changeTitle():void
  {
    
  }

}
