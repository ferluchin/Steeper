import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInternoComponent } from './personal-interno.component';

describe('PersonalInternoComponent', () => {
  let component: PersonalInternoComponent;
  let fixture: ComponentFixture<PersonalInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
