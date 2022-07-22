import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTecnicaProyectoComponent } from './informacion-tecnica-proyecto.component';

describe('InformacionTecnicaProyectoComponent', () => {
  let component: InformacionTecnicaProyectoComponent;
  let fixture: ComponentFixture<InformacionTecnicaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionTecnicaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionTecnicaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
