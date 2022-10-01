import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxproductComponent } from './uxproduct.component';

describe('UxproductComponent', () => {
  let component: UxproductComponent;
  let fixture: ComponentFixture<UxproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
