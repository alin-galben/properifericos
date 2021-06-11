import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { InsertarProductoComponent } from './components/producto/insertar-producto/insertar-producto.component';
import { ListarProductosComponent } from './components/producto/listar-productos/listar-productos.component';
import { InsertarAvatarComponent } from './components/avatar/insertar-avatar/insertar-avatar.component';
import { ListarAvataresComponent } from './components/avatar/listar-avatares/listar-avatares.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { PanelAdminComponent } from './components/user/panel-admin/panel-admin.component';
import { PanelUserComponent } from './components/user/panel-user/panel-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroValidoComponent } from './components/auth/registro-valido/registro-valido.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { DashboardAdminComponent } from './components/user/dashboard-admin/dashboard-admin.component';
import { EntradasListComponent } from './components/entrada/entradas-list/entradas-list.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { VerProductoComponent } from './components/producto/ver-producto/ver-producto.component';
import { ProductosComponent } from './components/producto/productos/productos.component';
import { ProductosCategoriasComponent } from './components/producto/productos-categorias/productos-categorias.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarProductoComponent,
    ListarProductosComponent,
    InsertarAvatarComponent,
    ListarAvataresComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    HomeComponent,
    PanelAdminComponent,
    PanelUserComponent,
    NavbarComponent,
    FooterComponent,
    RegistroValidoComponent,
    UsersListComponent,
    DashboardAdminComponent,
    EntradasListComponent,
    EstadisticasComponent,
    VerProductoComponent,
    ProductosComponent,
    ProductosCategoriasComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
