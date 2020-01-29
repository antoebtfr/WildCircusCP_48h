import { HomepageComponent } from './pages/homepage/homepage.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoadingComponent } from './pages/loading/loading.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component : LoadingComponent },
  {path: 'in-work', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
