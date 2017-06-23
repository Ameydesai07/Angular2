/**
 * Created by lt-117 on 22/6/17.
 */
import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{
  login(username, password) {
      if(username === "amey" && password === "1234") {
        return true;
      } else {
        return false;
      }
  }
}
