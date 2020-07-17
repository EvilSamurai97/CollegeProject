import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ViewComponent } from './pages/view/view.component';
import { HelperService } from '../app/shared/services/helper.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FriendComponent } from './pages/friend/friend.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfComponent } from './pages/prof/prof.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent,
    HomeComponent,
    FriendComponent,
    AboutComponent,
    ContactComponent,
    ProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
