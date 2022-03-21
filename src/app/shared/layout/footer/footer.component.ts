import { Component, OnInit } from '@angular/core';
import {IDictionary} from "../../interfaces/dictionary";
import {InfoService} from "../../../store/services/info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data: IDictionary<string> = {
    company: '',
    instagram: '',
    facebook: '',
    tel: '8 (---) --- -- --',
    email: '',
    address: '',
    logo: '',
  }
  constructor(
    private infoService: InfoService,
    ) { }

  ngOnInit(): void {
    this.getInfos()
  }

  getInfo(key: string) {
    this.infoService.getByKey(key).subscribe(res => {
      console.log(res)
      this.data[key] = res.value
    })
  }
  getInfos() {
    for (const key in this.data) {
      this.getInfo(key)
    }
  }
}
