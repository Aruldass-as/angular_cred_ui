import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthgurdGuard } from './authgurd.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthgurdGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: '**',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
