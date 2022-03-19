import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public position = [42.287633, 69.637922]
  title = 'Our contacts'
  infos = [
    "We are always glad to see our customers!",
    "Below you can see the map where our address is displayed."
    ]
  details = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      text: 'Shymkent city, Enbekshi district, Residential \n' +
      'area Zhuldyz, d.27/10'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      text: '8 (777) 355 32 50'
    },
    {
      icon: 'fas fa-clock',
      title: 'We are open',
      text: 'Monday - Friday: 9:00 AM - 6:00 PM'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      text: 'eshatyrov@inbox.ru'
    }
  ]
  documents = [
    {text: 'Productivity of oil products', link: ''},
    {text: 'Future: project generation', link: ''},
    {text: 'Protection of the environment from pollution', link: ''}
  ]

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Contacts'])
  }

}
