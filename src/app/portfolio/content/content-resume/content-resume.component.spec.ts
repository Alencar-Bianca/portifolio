import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentResumeComponent } from './content-resume.component';

describe('ContentResumeComponent', () => {
  let component: ContentResumeComponent;
  let fixture: ComponentFixture<ContentResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
