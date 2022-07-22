import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaEspAComponent } from './cronograma-esp-a.component';

describe('CronogramaEspAComponent', () => {
  let component: CronogramaEspAComponent;
  let fixture: ComponentFixture<CronogramaEspAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaEspAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaEspAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
