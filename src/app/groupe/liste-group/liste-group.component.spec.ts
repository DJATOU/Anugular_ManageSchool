import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupComponent } from './liste-group.component';

describe('ListeGroupComponent', () => {
  let component: ListeGroupComponent;
  let fixture: ComponentFixture<ListeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
