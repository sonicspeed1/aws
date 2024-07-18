import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './gasto.service';
import { UsuarioService } from './usuario.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ImpuestoComponent } from './impuesto/impuesto.component';
import { LoginComponent } from './autenticación/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AuthGuard } from './auth.guard';

const rutas: Routes = [ // Se corrige 'Route' a 'Routes'
  { path: 'registro', component: FormularioComponent, canActivate: [AuthGuard] },
  { path: 'reporte', component: ReporteComponent, canActivate: [AuthGuard] },
  { path: 'impuesto', component: ImpuestoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'usuario', component: RegistroComponent},
  { path: 'informacion', component: InformacionComponent },
  { path: '', redirectTo: '/informacion', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/informacion', pathMatch: 'full' } 
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FormularioComponent,
    ReporteComponent,
    ImpuestoComponent,
    RegistroComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [GastoService,UsuarioService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
