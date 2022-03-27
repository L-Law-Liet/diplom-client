import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../store/models/article.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input()
  sliders: Article[] = []
  @Input()
  name: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
