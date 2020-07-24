import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormTuteurComponent } from './dialog-form-tuteur.component';

describe('DialogFormTuteurComponent', () => {
  let component: DialogFormTuteurComponent;
  let fixture: ComponentFixture<DialogFormTuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormTuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
