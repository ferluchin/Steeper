import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionesGeneralComponent } from './observaciones-general.component';

describe('ObservacionesGeneralComponent', () => {
  let component: ObservacionesGeneralComponent;
  let fixture: ComponentFixture<ObservacionesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservacionesGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservacionesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
