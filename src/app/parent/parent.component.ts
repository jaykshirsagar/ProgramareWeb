import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  receivedFromChild : string = '';
  ToSentToParent : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToChild(message:string){
    this.ToSentToParent = message;
  }

  getMessage(message:string){
    this.receivedFromChild = message
  }

}
