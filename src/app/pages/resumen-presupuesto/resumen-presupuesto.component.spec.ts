import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPresupuestoComponent } from './resumen-presupuesto.component';

describe('ResumenPresupuestoComponent', () => {
  let component: ResumenPresupuestoComponent;
  let fixture: ComponentFixture<ResumenPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenPresupuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
