import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import{ HomeComponent } from './pages/home/home.component';
import{ FriendComponent } from './pages/friend/friend.component';
import{ AboutComponent } from './pages/about/about.component';
import{ ContactComponent } from './pages/contact/contact.component';
import{ ProfComponent } from './pages/prof/prof.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'create',
    component: CreateComponent
  },
  {
    path:'view',
    component: ViewComponent
  },
  {
    path:'friend',
    component:FriendComponent
  },
  {
    path:'profile',
    component:ProfComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
