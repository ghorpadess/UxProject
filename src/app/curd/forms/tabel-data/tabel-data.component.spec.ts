import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelDataComponent } from './tabel-data.component';

describe('TabelDataComponent', () => {
  let component: TabelDataComponent;
  let fixture: ComponentFixture<TabelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
