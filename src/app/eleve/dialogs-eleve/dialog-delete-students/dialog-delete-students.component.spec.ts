import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteStudentsComponent } from './dialog-delete-students.component';

describe('DialogDeleteStudentsComponent', () => {
  let component: DialogDeleteStudentsComponent;
  let fixture: ComponentFixture<DialogDeleteStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
