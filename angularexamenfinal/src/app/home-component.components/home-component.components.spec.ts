import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentComponents } from './home-component.components';

describe('HomeComponentComponents', () => {
  let component: HomeComponentComponents;
  let fixture: ComponentFixture<HomeComponentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
