import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmInscriptionComponent } from './dialog-confirm-inscription.component';

describe('DialogConfirmInscriptionComponent', () => {
  let component: DialogConfirmInscriptionComponent;
  let fixture: ComponentFixture<DialogConfirmInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
