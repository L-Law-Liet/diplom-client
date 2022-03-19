import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['Partners'])
  }

}
