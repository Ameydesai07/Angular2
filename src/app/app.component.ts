import { Component } from '@angular/core';
import { ProductServices } from './product.services';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <login></login>
  <products></products>
  <user-form></user-form>`,
  providers: [ProductServices]
})

export class AppComponent {
  title = 'My angular2app';
  isActive = false;
}
