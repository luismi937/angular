import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponentComponents } from './profile-component.components';

describe('ProfileComponentComponents', () => {
  let component: ProfileComponentComponents;
  let fixture: ComponentFixture<ProfileComponentComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponentComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponentComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
