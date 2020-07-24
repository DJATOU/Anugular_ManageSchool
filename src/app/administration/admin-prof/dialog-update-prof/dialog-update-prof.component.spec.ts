import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProfComponent } from './dialog-update-prof.component';

describe('DialogUpdateProfComponent', () => {
  let component: DialogUpdateProfComponent;
  let fixture: ComponentFixture<DialogUpdateProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
