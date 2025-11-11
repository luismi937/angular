import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillafuncioncsimpleComponents } from './plantillafuncioncsimple.components';

describe('PlantillafuncioncsimpleComponents', () => {
  let component: PlantillafuncioncsimpleComponents;
  let fixture: ComponentFixture<PlantillafuncioncsimpleComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncioncsimpleComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillafuncioncsimpleComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
