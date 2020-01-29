import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './pages/loading/loading.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component : LoadingComponent },
  {path: 'in-work', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
