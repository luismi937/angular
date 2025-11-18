import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponentComponents } from './auth-component.components';

describe('AuthComponentComponents', () => {
  let component: AuthComponentComponents;
  let fixture: ComponentFixture<AuthComponentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthComponentComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
