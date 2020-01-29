import { ProfileComponent } from './pages/profile/profile.component';
import { LeCirqueComponent } from './pages/le-cirque/le-cirque.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoadingComponent } from './pages/loading/loading.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './pages/shows/shows.component';


const routes: Routes = [
  {path: '', component : LoadingComponent },
  {path: 'le-cirque', component: LeCirqueComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'in-work', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
