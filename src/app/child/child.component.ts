import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  receivedFromParent:string ='';
  @Output()
  messageToEmit = new EventEmitter<string>();
  ToSendChild:string = "Hello parent";

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(message:string){
    this.messageToEmit.emit(message);
  }

}
