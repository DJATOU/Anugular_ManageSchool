import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteEtablissementComponent } from './dialog-delete-etablissement.component';

describe('DialogDeleteEtablissementComponent', () => {
  let component: DialogDeleteEtablissementComponent;
  let fixture: ComponentFixture<DialogDeleteEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
