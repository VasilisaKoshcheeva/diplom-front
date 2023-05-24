import { Component } from '@angular/core';

@Component({
  selector: 'app-regauth',
  templateUrl: './regauth.component.html',
  styleUrls: ['./regauth.component.css']
})
export class RegauthComponent {
  hide = true;
  auth = true;

  regauth():string{
    return this.auth?"Вход в систему":"Регистрация";
  }
}
