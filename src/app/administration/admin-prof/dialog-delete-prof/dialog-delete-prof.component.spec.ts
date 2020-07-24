import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteProfComponent } from './dialog-delete-prof.component';

describe('DialogDeleteProfComponent', () => {
  let component: DialogDeleteProfComponent;
  let fixture: ComponentFixture<DialogDeleteProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
