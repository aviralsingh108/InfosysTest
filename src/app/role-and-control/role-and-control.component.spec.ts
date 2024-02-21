import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAndControlComponent } from './role-and-control.component';

describe('RoleAndControlComponent', () => {
  let component: RoleAndControlComponent;
  let fixture: ComponentFixture<RoleAndControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleAndControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAndControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
