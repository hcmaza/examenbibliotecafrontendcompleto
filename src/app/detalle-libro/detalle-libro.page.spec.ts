import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLibroPage } from './detalle-libro.page';

describe('DetalleLibroPage', () => {
  let component: DetalleLibroPage;
  let fixture: ComponentFixture<DetalleLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLibroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
