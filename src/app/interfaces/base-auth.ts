import {FormGroup} from "@angular/forms";

export abstract class BaseAuth {
  form = new FormGroup({})
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
}
