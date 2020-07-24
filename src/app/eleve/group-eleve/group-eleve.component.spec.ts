import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEleveComponent } from './group-eleve.component';

describe('GroupEleveComponent', () => {
  let component: GroupEleveComponent;
  let fixture: ComponentFixture<GroupEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
