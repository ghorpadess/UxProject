import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestUserComponent } from './child-test-user.component';

describe('ChildTestUserComponent', () => {
  let component: ChildTestUserComponent;
  let fixture: ComponentFixture<ChildTestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTestUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
