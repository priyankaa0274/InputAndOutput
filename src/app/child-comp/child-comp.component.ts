import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }
  @Input() public childData: string;
  @Output()event:EventEmitter<string> = new EventEmitter();

  public goodbye="goodbye";
  sendToParent(){
  	this.event.emit(this.goodbye);
  }

  ngOnInit() {
  }

}
