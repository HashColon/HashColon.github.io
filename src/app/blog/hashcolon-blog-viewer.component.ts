import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashcolon-blog-viewer',
  templateUrl: './hashcolon-blog-viewer.component.html',
  styleUrls: ['./hashcolon-blog-viewer.component.scss']
})
export class HashcolonBlogViewerComponent implements OnInit {

  topicListExpanded: boolean = true;
  pageListExpanded: boolean = false;

  topics: string[] = ['babo', 'test', 'hehe'];
  pages: string[] = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5'];

  constructor() { }

  ngOnInit(): void {
  }

}
