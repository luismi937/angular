import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutablamultiplicarComponent } from './menutablamultiplicar.component';

describe('MenutablamultiplicarComponent', () => {
  let component: MenutablamultiplicarComponent;
  let fixture: ComponentFixture<MenutablamultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenutablamultiplicarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutablamultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
