import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent {
  @Output()
  buttonClick = new EventEmitter();
  
  onButtonClick(){
    this.buttonClick.emit()
  }
}
