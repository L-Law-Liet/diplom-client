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
  orders = [
    {
      id: 1,
      total: (Math.random() * 1000).toFixed(2),
      order_items: [
        {name: 'Product1', cost: 14.89, count: 3, created_at: '12.10.2021'},
        {name: 'Product2', cost: Math.random().toFixed(3), count: 7, created_at: '07.08.2021'},
        {name: 'Product3', cost: Math.random().toFixed(3), count: 4, created_at: '09.10.2021'},
        {name: 'Product4', cost: Math.random().toFixed(3), count: 6, created_at: '12.12.2021'},
      ]
    },
    {
      id: 2,
      total: (Math.random() * 1000).toFixed(2),
      order_items: [
        {name: 'Product1', cost: 14.89, count: 3, created_at: '12.10.2021'},
        {name: 'Product2', cost: Math.random().toFixed(3), count: 7, created_at: '07.08.2021'},
        {name: 'Product3', cost: Math.random().toFixed(3), count: 4, created_at: '09.10.2021'},
        {name: 'Product4', cost: Math.random().toFixed(3), count: 6, created_at: '12.12.2021'},
      ]
    }
  ]
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
