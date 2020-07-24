import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletePriceComponent } from './dialog-delete-price.component';

describe('DialogDeletePriceComponent', () => {
  let component: DialogDeletePriceComponent;
  let fixture: ComponentFixture<DialogDeletePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeletePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeletePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
