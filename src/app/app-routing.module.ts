import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddingComponent } from './adding/adding.component'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'adding', component: AddingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
