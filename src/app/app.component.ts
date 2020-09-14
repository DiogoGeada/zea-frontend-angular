import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<products></products>`
})

export class AppComponent {
  title = 'My first angular app';
  imageURL = './assets/images/Comporta aaa Branco 2017.png'
  isValid = true;

  toggleButton(){
    this.isValid = !this.isValid;
  }
}
