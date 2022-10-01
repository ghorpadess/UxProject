import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestAdminComponent } from './child-test-admin.component';

describe('ChildTestAdminComponent', () => {
  let component: ChildTestAdminComponent;
  let fixture: ComponentFixture<ChildTestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
