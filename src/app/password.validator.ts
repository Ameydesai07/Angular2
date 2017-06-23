/**
 * Created by lt-117 on 22/6/17.
 */
import { FormControl } from '@angular/forms';

export class PasswordValidator {
  static cannotContainSpace(formControl: FormControl){
    if (formControl.value.indexOf('') >= 0)
     return {cannotContainSpace: true}
    return null;
  }
}
