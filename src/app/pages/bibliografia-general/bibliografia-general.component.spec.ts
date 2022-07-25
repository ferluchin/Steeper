import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliografiaGeneralComponent } from './bibliografia-general.component';

describe('BibliografiaGeneralComponent', () => {
  let component: BibliografiaGeneralComponent;
  let fixture: ComponentFixture<BibliografiaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliografiaGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliografiaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
