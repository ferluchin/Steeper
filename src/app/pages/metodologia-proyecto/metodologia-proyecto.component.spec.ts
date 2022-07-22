import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologiaProyectoComponent } from './metodologia-proyecto.component';

describe('MetodologiaProyectoComponent', () => {
  let component: MetodologiaProyectoComponent;
  let fixture: ComponentFixture<MetodologiaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodologiaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodologiaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
