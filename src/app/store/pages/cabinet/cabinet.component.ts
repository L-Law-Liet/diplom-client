import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/order.model";
import {User} from "../../../shared/models/user.model";
import {EventService} from "../../../shared/services/event.service";
import {IDictionary} from "../../../shared/interfaces/dictionary";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {
  user!: User
  orders: Order[] = []
  total = 0
  form = new FormGroup({})
  link = ''
  loading = false
  errors: IDictionary<string> = environment.errors
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private eventService: EventService
  ) {
    this.form = new FormGroup({
      name: new FormControl(userService.user.name, Validators.required),
      phone: new FormControl(userService.user.phone, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
    })
  }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Profile'])
    this.getUser()
    this.getOrders()
  }
  getUser() {
    this.userService.getUser().subscribe(res => {
      console.log(res)
      this.userService.setUser(res)
      this.user = this.userService.user
      this.link = this.user.image
    })
  }
  getOrders() {
    this.orderService.all().subscribe(res => {
      this.orders = res
      this.getTotal()
      console.log(res)
    })
  }
  setAvatar(files: FileList) {
    if (files.length){
      const image = files[0];
      console.log(image)
      this.userService.setAvatar(image).subscribe(
        res => {
          this.link = res
          this.userService.user.image = res
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
      }, error => {
        this.loading = false
        this.form.setErrors(error.error.errors)
        console.log(error.error.errors, this.form.getError('phone'))
      }, () => {this.loading = false})
    }
  }
  hasError(name: string): boolean {
    return  this.form.getError(name) || this.form.controls[name].invalid && (this.form.controls[name].dirty || this.form.controls[name].touched)
  }
  getError(errors: any) {
    const key = Object.keys(errors)[0]
    console.log(errors, key)
    return this.errors[key]
  }
  getTotal() {
    this.total = 0;
    for (const ordersKey in this.orders) {
      this.total += this.orders[ordersKey].total
    }
  }
}
