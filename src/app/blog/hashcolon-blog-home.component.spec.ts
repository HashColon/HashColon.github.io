import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashcolonBlogHomeComponent } from './hashcolon-blog-home.component';

describe('HashcolonBlogHomeComponent', () => {
  let component: HashcolonBlogHomeComponent;
  let fixture: ComponentFixture<HashcolonBlogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashcolonBlogHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashcolonBlogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
