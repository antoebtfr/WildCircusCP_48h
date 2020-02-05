import { VariablesGlobales } from './variableGlobales';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeCirqueComponent } from './pages/le-cirque/le-cirque.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

import { ShowService } from './shared/serv/show.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    WelcomeComponent,
    HomepageComponent,
    NavbarComponent,
    LeCirqueComponent,
    ShowsComponent,
    ProfileComponent,
    SidebarComponent,
    SignUpFormComponent,
    LoginFormComponent,
    AdminPageComponent,
    UserListComponent,
    ShowListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VariablesGlobales, ShowService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
