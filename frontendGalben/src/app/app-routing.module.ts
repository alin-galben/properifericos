import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { PanelUserComponent } from './components/user/panel-user/panel-user.component';
import { RegistroValidoComponent } from './components/auth/registro-valido/registro-valido.component';
import { DashboardAdminComponent } from './components/user/dashboard-admin/dashboard-admin.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { EntradasListComponent } from './components/entrada/entradas-list/entradas-list.component';
import { ListarProductosComponent } from './components/producto/listar-productos/listar-productos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ListarAvataresComponent } from './components/avatar/listar-avatares/listar-avatares.component';
import { PanelAdminComponent } from './components/user/panel-admin/panel-admin.component';
import { InsertarProductoComponent } from './components/producto/insertar-producto/insertar-producto.component';
import { VerProductoComponent } from './components/producto/ver-producto/ver-producto.component';
import { ProductosComponent } from './components/producto/productos/productos.component';
import { ProductosCategoriasComponent } from './components/producto/productos-categorias/productos-categorias.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro/valido', component: RegistroValidoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'panel', component: PanelAdminComponent},
  { path: 'user', component: PanelUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'admin/usuarios', component: UsersListComponent },
  { path: 'admin/entradas', component: EntradasListComponent },
  { path: 'admin/productos', component: ListarProductosComponent },
  { path: 'admin/estadisticas', component: EstadisticasComponent },
  { path: 'admin/avatares', component: ListarAvataresComponent },
  { path: 'admin/productos/insertar', component: InsertarProductoComponent },
  { path: 'producto/:id', component: VerProductoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:categoria', component: ProductosCategoriasComponent },
  { path: 'sobremi', component: SobreMiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
