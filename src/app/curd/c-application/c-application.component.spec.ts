import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CApplicationComponent } from './c-application.component';

describe('CApplicationComponent', () => {
  let component: CApplicationComponent;
  let fixture: ComponentFixture<CApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
