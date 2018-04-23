import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentData = "hello";

  public goodbye:string;
  setDataFromChild(event){
  	this.goodbye = event ;
  }
}
