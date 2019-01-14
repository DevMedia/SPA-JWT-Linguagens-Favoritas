import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/publico/login/login.component';
import { DashboardComponent } from './paginas/restrito/dashboard/dashboard.component';
import { CardListaLinguagensComponent } from './compartilhado/card-lista-linguagens/card-lista-linguagens.component';
import { BemVindoComponent } from './paginas/publico/bem-vindo/bem-vindo.component';
import { CabecalhoComponent } from './compartilhado/cabecalho/cabecalho.component';
import { CadastroComponent } from './paginas/publico/cadastro/cadastro.component';
import { CardGraficoLinguagensComponent } from './compartilhado/card-grafico-linguagens/card-grafico-linguagens.component';
import { environment } from '../environments/environment';
import { TokenApiService } from './interceptadores/token-api.service';
import { InvalidTokenApiService } from './interceptadores/invalid-token-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CardListaLinguagensComponent,
    BemVindoComponent,
    CabecalhoComponent,
    CadastroComponent,
    CardGraficoLinguagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(environment.toastConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
