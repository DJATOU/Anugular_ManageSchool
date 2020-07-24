import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteStudentFromGroupComponent } from './dialog-delete-student-from-group.component';

describe('DialogDeleteStudentFromGroupComponent', () => {
  let component: DialogDeleteStudentFromGroupComponent;
  let fixture: ComponentFixture<DialogDeleteStudentFromGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteStudentFromGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteStudentFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
