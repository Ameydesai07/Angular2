/**
 * Created by lt-117 on 22/6/17.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { LoginService } from './login.service';

@Component({
  selector: "login",
  templateUrl:"login.component.html"
})

export class LoginComponent {
  form: FormGroup;
  constructor(fb: FormBuilder, private_loginService: LoginService){
    this.form = fb.group({
      username:['', Validators.required],
      password:['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    })
  }
  login(){
    var result = this._loginService.login(this.form.controls["username"], this.form.controls["password"]);
    if(!result){
      this.form.controls["password"].setErrors({
        invalidLogin: true
      })
    }
    console.log("form values", this.form.value);
  }
}
