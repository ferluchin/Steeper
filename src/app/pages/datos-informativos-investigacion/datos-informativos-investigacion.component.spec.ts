import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInformativosInvestigacionComponent } from './datos-informativos-investigacion.component';

describe('DatosInformativosInvestigacionComponent', () => {
  let component: DatosInformativosInvestigacionComponent;
  let fixture: ComponentFixture<DatosInformativosInvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosInformativosInvestigacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosInformativosInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
