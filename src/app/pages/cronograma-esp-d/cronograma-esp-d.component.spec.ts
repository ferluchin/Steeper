import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaEspDComponent } from './cronograma-esp-d.component';

describe('CronogramaEspDComponent', () => {
  let component: CronogramaEspDComponent;
  let fixture: ComponentFixture<CronogramaEspDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaEspDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaEspDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
