import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from 'app/user-data/user-data.component';
import { UserListComponent } from 'app/user-list/user-list.component';
import { UserDetailComponent } from "app/user-detail/user-detail.component";
import { LoginComponent } from 'app/login/login.component';
import { CanloginGuard } from 'app/canlogin.guard';
const routes: Routes = [
  { path: 'user', component: UserDataComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'login', component: LoginComponent,data: {
    message: 'hello angular'
    },canActivate:[CanloginGuard] },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  { path: '**', component: UserDataComponent }
];

export const routedComponents = RouterModule.forRoot(routes)