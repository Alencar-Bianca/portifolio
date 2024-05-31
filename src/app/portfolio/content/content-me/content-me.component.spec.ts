import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMeComponent } from './content-me.component';

describe('ContentMeComponent', () => {
  let component: ContentMeComponent;
  let fixture: ComponentFixture<ContentMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
