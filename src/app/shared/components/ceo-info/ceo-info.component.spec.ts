import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoInfoComponent } from './ceo-info.component';

describe('CeoInfoComponent', () => {
  let component: CeoInfoComponent;
  let fixture: ComponentFixture<CeoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
