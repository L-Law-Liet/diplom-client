import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventService} from "../../../shared/services/event.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.changeBreadcrumbs(['About Us'])
  }
}
