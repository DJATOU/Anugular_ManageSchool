import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStudentComponent } from './dialog-update-student.component';

describe('DialogUpdateTuteurComponent', () => {
  let component: DialogUpdateStudentComponent;
  let fixture: ComponentFixture<DialogUpdateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
