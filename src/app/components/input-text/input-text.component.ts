import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input()
  input: any
  @Input()
  error: any
  hide = true

  @Output()
  valueChangedEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(value: string) {
    this.valueChangedEvent.emit({name: this.input.name, value});
  }
}
