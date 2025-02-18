import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/admin', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
];
