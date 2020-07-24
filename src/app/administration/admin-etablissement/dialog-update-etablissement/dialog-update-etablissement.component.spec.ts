import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateEtablissementComponent } from './dialog-update-etablissement.component';

describe('DialogUpdateEtablissementComponent', () => {
  let component: DialogUpdateEtablissementComponent;
  let fixture: ComponentFixture<DialogUpdateEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
