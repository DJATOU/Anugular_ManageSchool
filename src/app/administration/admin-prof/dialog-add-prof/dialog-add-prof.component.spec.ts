import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProfComponent } from './dialog-add-prof.component';

describe('DialogAddProfComponent', () => {
  let component: DialogAddProfComponent;
  let fixture: ComponentFixture<DialogAddProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
