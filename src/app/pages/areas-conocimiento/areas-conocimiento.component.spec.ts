import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasConocimientoComponent } from './areas-conocimiento.component';

describe('AreasConocimientoComponent', () => {
  let component: AreasConocimientoComponent;
  let fixture: ComponentFixture<AreasConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasConocimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
