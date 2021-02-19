import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashcolonBlogViewerComponent } from './hashcolon-blog-viewer.component';

describe('HashcolonBlogViewerComponent', () => {
  let component: HashcolonBlogViewerComponent;
  let fixture: ComponentFixture<HashcolonBlogViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashcolonBlogViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashcolonBlogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
