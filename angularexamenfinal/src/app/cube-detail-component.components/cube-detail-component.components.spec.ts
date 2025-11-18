import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeDetailComponentComponents } from './cube-detail-component.components';

describe('CubeDetailComponentComponents', () => {
  let component: CubeDetailComponentComponents;
  let fixture: ComponentFixture<CubeDetailComponentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeDetailComponentComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeDetailComponentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
