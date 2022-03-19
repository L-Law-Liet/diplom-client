import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchFormComponent } from './touch-form.component';

describe('TouchFormComponent', () => {
  let component: TouchFormComponent;
  let fixture: ComponentFixture<TouchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
