import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtablissementComponent } from './admin-etablissement.component';

describe('AdminEtablissementComponent', () => {
  let component: AdminEtablissementComponent;
  let fixture: ComponentFixture<AdminEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
