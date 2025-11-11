import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillafuncionsimpleComponent } from './plantillafuncioncsimple.components';

describe('PlantillafuncioncsimpleComponents', () => {
  let component: PlantillafuncionsimpleComponent;
  let fixture: ComponentFixture<PlantillafuncionsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionsimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
