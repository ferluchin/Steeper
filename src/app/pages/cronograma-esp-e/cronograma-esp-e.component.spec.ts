import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaEspEComponent } from './cronograma-esp-e.component';

describe('CronogramaEspEComponent', () => {
  let component: CronogramaEspEComponent;
  let fixture: ComponentFixture<CronogramaEspEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaEspEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaEspEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
