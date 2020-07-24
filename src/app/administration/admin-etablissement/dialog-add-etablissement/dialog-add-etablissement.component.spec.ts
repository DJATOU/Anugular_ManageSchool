import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEtablissementComponent } from './dialog-add-etablissement.component';

describe('DialogAddEtablissementComponent', () => {
  let component: DialogAddEtablissementComponent;
  let fixture: ComponentFixture<DialogAddEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
