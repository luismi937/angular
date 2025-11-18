import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasComponentComponents } from './compras-component.components';

describe('ComprasComponentComponents', () => {
  let component: ComprasComponentComponents;
  let fixture: ComponentFixture<ComprasComponentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasComponentComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasComponentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
