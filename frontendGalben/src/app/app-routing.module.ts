import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { PanelAdminComponent } from './components/user/panel-admin/panel-admin.component';
import { PanelUserComponent } from './components/user/panel-user/panel-user.component';
import { RegistroValidoComponent } from './components/auth/registro-valido/registro-valido.component';
import { UsersListComponent} from './components/user/users-list/users-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro/valido', component: RegistroValidoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: PanelAdminComponent },
  { path: 'user', component: PanelUserComponent },
  { path: 'users', component: UsersListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
