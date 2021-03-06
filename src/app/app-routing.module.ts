import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@HashColon/home/home.component';
import { TestComponent } from '@HashColon/test/test.component';
import { BackendConnectorViewerComponent } from './backendconnector/src/app/backend-connector-viewer.component';
//import { TestNavComponent } from '@HashColon/test-nav/test-nav.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: BackendConnectorViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
