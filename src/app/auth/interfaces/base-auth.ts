import {FormGroup} from "@angular/forms";
import {IDictionary} from "../../shared/interfaces/dictionary";

export abstract class BaseAuth {
  form = new FormGroup({})

  errors: IDictionary<string> = {
    email: 'Invalid email address',
    mask: 'Invalid field',
    minlength: 'Invalid field',
    maxlength: 'Invalid field',
    required: 'This field is required',
  }
  hide = true

  setVal(input: any) {
    let name = input.name
    let val = input.value
    if (name == 'phone') {
      val = this.getPhone(val)
    }
    let errors = this.form.errors
    this.form.controls[name].setValue(val);
    this.form.setErrors(errors)
  }
  getPhone(val: string) {
    return val.slice(2).match(/\d+/g)?.join('')
  }
  hasError(input: any): boolean {
    return  this.form.getError(input.name) || this.form.controls[input.name].invalid && (this.form.controls[input.name].dirty || this.form.controls[input.name].touched)
  }
  getError(errors: any) {
    const key = Object.keys(errors)[0]
    return this.errors[key]
  }
}
