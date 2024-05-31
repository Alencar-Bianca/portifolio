import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLinkComponent } from './icons-link.component';

describe('IconsLinkComponent', () => {
  let component: IconsLinkComponent;
  let fixture: ComponentFixture<IconsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
