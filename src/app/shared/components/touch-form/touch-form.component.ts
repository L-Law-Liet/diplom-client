import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IDictionary} from "../../interfaces/dictionary";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-touch-form',
  templateUrl: './touch-form.component.html',
  styleUrls: ['./touch-form.component.css']
})
export class TouchFormComponent implements OnInit {

  form = new FormGroup({})
  errors: IDictionary<string> = environment.errors
  inputs = [
    {name: 'first_name', type: 'text', label: 'First Name', col: 6, isTextArea: false},
    {name: 'last_name', type: 'text', label: 'Last Name', col: 6, isTextArea: false},
    {name: 'business_name', type: 'text', label: 'Business Name', col: 6, isTextArea: false},
    {name: 'job_title', type: 'text', label: 'Job Title', col: 6, isTextArea: false},
    {name: 'email', type: 'email',  label: 'Email', col: 6, isTextArea: false},
    {name: 'contact_no', type: 'text', label: 'Contact No', col: 6, isTextArea: false},
    {name: 'offer', type: 'text', label: 'What services do you offer?', col: 12, isTextArea: false},
    {name: 'help', type: 'text', label: 'How can we help you?', col: 12, isTextArea: true},
  ]
  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      business_name: new FormControl('', Validators.required),
      job_title: new FormControl('', Validators.required),
      contact_no: new FormControl('', Validators.required),
      offer: new FormControl('', Validators.required),
      help: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }
  hasError(input: any): boolean {
    return  this.form.getError(input.name) || this.form.controls[input.name].invalid && (this.form.controls[input.name].dirty || this.form.controls[input.name].touched)
  }
  getError(errors: any) {
    const key = Object.keys(errors)[0]
    console.log(errors, key)
    return this.errors[key]
  }

}
