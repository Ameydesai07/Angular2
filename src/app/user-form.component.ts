/**
 * Created by lt-117 on 21/6/17.
 */
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: "user-form",
  templateUrl:"user-form.component.html"
})

export class UserFormComponent {
  countries = ["US", "India", "China"];
  model = new User("","","");
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
}
