import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import {AuthGaurd} from './gaurds/auth.gaurd';
import { RegisterGaurd } from './gaurds/register.gaurd';

const routes: Routes = [
  {path: '', component: DashboardComponent , canActivate: [AuthGaurd]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGaurd]},
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGaurd] },
  { path: 'client/add', component: AddClientComponent, canActivate: [AuthGaurd] },
  { path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGaurd]},
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGaurd]},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [
   RouterModule.forRoot(routes)
  ],
  providers: [AuthGaurd , RegisterGaurd]
})
export class AppRoutingModule { }
