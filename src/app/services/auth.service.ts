import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from './token.service';
import { Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';
import { TokenApi } from '../interfaces/respostas/token-api';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _autenticado: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {
    this._autenticado = new BehaviorSubject(false);
    this.autenticado$ = this._autenticado.asObservable();
  }

  logar(usuario: Usuario): Observable<boolean> {
    const url = `${environment.linguagensApiUrl}/auth/login`;
    return this.http.post<TokenApi>(url, usuario).pipe(
      map((resposta: TokenApi) => {
        if (!this.criarSessao(resposta.token)) {
          throw new Error();
        }
        return true;
      })
    );
  }

  deslogar(): Observable<TokenApi> {
    const url = `${environment.linguagensApiUrl}/auth/logout`;
    return this.http.post<TokenApi>(url, {}).pipe(
      tap(() => {
        this.resetarSessao();
      },
        catchError((err) => {
          this.resetarSessao();
          return err;
        }))
    );
  }

  criarSessao(token: string): boolean {
    try {
      const usuario: Usuario = jwtDecode(token);
      this.usuarioService.setUsuario(usuario);
      this.tokenService.token = token;
      this._autenticado.next(true);
      return true;
    } catch (err) {
      return false;
    }
  }

  resetarSessao() {
    this.tokenService.resetarToken();
    if (this._autenticado.value) {
      this._autenticado.next(false);
    }
  }

}
