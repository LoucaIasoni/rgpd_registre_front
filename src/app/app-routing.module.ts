import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.components';
import { LoginComponent } from './components/login/login.component';

import { NewAccountComponent } from './components/new-account/new-account.component';
import { AuthGuard } from './app.authGuard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'new-account',
    component: NewAccountComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
