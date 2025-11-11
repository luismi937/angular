import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosComponentComponent } from './departamentos-component.component';

describe('DepartamentosComponentComponent', () => {
  let component: DepartamentosComponentComponent;
  let fixture: ComponentFixture<DepartamentosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartamentosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
