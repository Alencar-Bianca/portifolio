import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonComponent } from './info-person.component';

describe('InfoPersonComponent', () => {
  let component: InfoPersonComponent;
  let fixture: ComponentFixture<InfoPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
