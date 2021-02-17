import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as mds from '@HashColon/hashcolon-modulelist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moduleList = mds.moduleList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  _navigateTo(card) {
    this.router.navigate([card.link]);
  }

}
