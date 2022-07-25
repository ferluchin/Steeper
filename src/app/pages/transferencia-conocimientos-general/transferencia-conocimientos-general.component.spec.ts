import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaConocimientosGeneralComponent } from './transferencia-conocimientos-general.component';

describe('TransferenciaConocimientosGeneralComponent', () => {
  let component: TransferenciaConocimientosGeneralComponent;
  let fixture: ComponentFixture<TransferenciaConocimientosGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaConocimientosGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaConocimientosGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
