import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalExternoCooperanteComponent } from './personal-externo-cooperante.component';

describe('PersonalExternoCooperanteComponent', () => {
  let component: PersonalExternoCooperanteComponent;
  let fixture: ComponentFixture<PersonalExternoCooperanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalExternoCooperanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalExternoCooperanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
