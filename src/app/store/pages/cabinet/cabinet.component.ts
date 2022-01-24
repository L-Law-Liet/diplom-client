import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  user: any
  form = new FormGroup({})
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: new FormControl(userService.user.name),
      email: new FormControl(userService.user.email),
      phone: new FormControl(userService.user.phone),
    })
  }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.user = this.userService.user
  }
}
