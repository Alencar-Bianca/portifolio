import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInfoMeComponent } from './menu-info-me.component';

describe('MenuInfoMeComponent', () => {
  let component: MenuInfoMeComponent;
  let fixture: ComponentFixture<MenuInfoMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInfoMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuInfoMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
