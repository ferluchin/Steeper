import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaEspCComponent } from './cronograma-esp-c.component';

describe('CronogramaEspCComponent', () => {
  let component: CronogramaEspCComponent;
  let fixture: ComponentFixture<CronogramaEspCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaEspCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaEspCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
