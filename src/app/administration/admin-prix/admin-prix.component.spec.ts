import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrixComponent } from './admin-prix.component';

describe('AdminPrixComponent', () => {
  let component: AdminPrixComponent;
  let fixture: ComponentFixture<AdminPrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
