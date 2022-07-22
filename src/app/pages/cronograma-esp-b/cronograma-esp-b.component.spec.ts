import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaEspBComponent } from './cronograma-esp-b.component';

describe('CronogramaEspBComponent', () => {
  let component: CronogramaEspBComponent;
  let fixture: ComponentFixture<CronogramaEspBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaEspBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaEspBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
