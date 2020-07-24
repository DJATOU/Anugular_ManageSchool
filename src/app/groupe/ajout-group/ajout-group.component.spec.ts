import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGroupComponent } from './ajout-group.component';

describe('AjoutGroupComponent', () => {
  let component: AjoutGroupComponent;
  let fixture: ComponentFixture<AjoutGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
