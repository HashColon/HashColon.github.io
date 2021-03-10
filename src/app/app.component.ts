import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectorService } from '@HashColonBackend/backend-connector.service';

import * as mds from '@HashColon/hashcolon-modulelist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'HashColon.github.io';
  moduleList = mds.moduleList;

  constructor(
    private router: Router,
    public backend: BackendConnectorService) { }

  _navigateTo(item) {
    if (typeof item == 'string') {
      this.router.navigate([item]);
    } else if (item.link) {
      this.router.navigate([item.link]);
    }
  }

}
