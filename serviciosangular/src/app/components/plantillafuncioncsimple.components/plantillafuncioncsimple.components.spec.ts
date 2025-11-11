import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaSimpleComponent } from './plantillafuncioncsimple.components';

describe('PlantillafuncioncsimpleComponents', () => {
  let component: PlantillaSimpleComponent;
  let fixture: ComponentFixture<PlantillaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
