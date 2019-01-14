import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './paginas/restrito/dashboard/dashboard.component';
import { LoginComponent } from './paginas/publico/login/login.component';
import { BemVindoComponent } from './paginas/publico/bem-vindo/bem-vindo.component';
import { CadastroComponent } from './paginas/publico/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BemVindoComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [NotAuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
