import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuario: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this._usuario = new BehaviorSubject({} as Usuario);
    this.usuario$ = this._usuario.asObservable();
  }

  setUsuario(usuario: Usuario) {
    this._usuario.next(usuario);
  }

  cadastrar(usuario: Usuario): Observable<any> {
    const url = `${environment.linguagensApiUrl}/usuarios`;
    return this.http.post(url, usuario);
  }

}
