import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAndControlComponent } from './role-and-control/role-and-control.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to 'home' by default
      { path: 'home', component: HomeComponent }, // Your HomeContentComponent (or any other content) could be loaded by default
      { path: 'roleandcontrol', component: RoleAndControlComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
