import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public position = [42.287633, 69.637922]
  title = 'Company office Standard Oil Qazaqstan'
  address = 'Shymkent city, Enbekshi district,\n' +
    'Residential area Zhuldyz, d.27/10'
  schedule = 'Mon - Fri, 10:00 - 18:00'
  details = 'БИН/ИИН: 191240029778\n' +
    'КБЕ: 17\n' +
    'Банк: АО ДБ «Альфа-Банк»\n' +
    'БИН Банка: 941240000341\n' +
    'БИК Банка: ALFAKZKA'
  documents = [
    {text: 'Productivity of oil products', link: ''},
    {text: 'Future: project generation', link: ''},
    {text: 'Protection of the environment from pollution', link: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
