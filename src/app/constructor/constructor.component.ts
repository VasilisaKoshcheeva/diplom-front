import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent {
  draw:boolean = true;
  onButtonClick(){
    this.draw=!this.draw;
  }
}
