import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePriceComponent } from './dialog-update-price.component';

describe('DialogUpdatePriceComponent', () => {
  let component: DialogUpdatePriceComponent;
  let fixture: ComponentFixture<DialogUpdatePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdatePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
