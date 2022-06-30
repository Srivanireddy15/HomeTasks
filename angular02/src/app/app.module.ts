import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { ActiveListComponent } from './modules/active/components/active-list/active-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListComponent,
    UserDetailsComponent,
    HomeComponent,
    ActiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
