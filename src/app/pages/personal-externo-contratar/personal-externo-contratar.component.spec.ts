import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalExternoContratarComponent } from './personal-externo-contratar.component';

describe('PersonalExternoContratarComponent', () => {
  let component: PersonalExternoContratarComponent;
  let fixture: ComponentFixture<PersonalExternoContratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalExternoContratarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalExternoContratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
