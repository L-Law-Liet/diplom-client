import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/order.model";
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  user!: User
  orders: Order[] = []
  form = new FormGroup({})
  link = ''
  loading = false
  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) {
    this.form = new FormGroup({
      name: new FormControl(userService.user.name),
      phone: new FormControl(userService.user.phone),
    })
  }

  ngOnInit(): void {
    this.getUser()
    this.getOrders()
  }
  getUser() {
    this.user = this.userService.user
    this.link = this.user.media.link
    console.log(this.user)
  }
  getOrders() {
    this.orderService.all().subscribe(res => {
      this.orders = res
      console.log(res)
    })
  }
  setAvatar(files: FileList) {
    if (files.length){
      const image = files[0];
      console.log(image)
      this.userService.setAvatar(image).subscribe(
        res => {
          this.link = res.link
          this.userService.user.media = res
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  update() {
    if (!this.loading) {
      this.loading = true
      this.userService.update(this.form.getRawValue()).subscribe(res => {
        this.userService.setUser(res)
      }, () => {}, () => {this.loading = false})
    }
  }
}
