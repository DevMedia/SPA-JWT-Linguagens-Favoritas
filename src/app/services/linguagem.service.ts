import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Linguagem } from '../interfaces/linguagem';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {
  private _linguagens: BehaviorSubject<Linguagem[]>;
  public readonly linguagens$: Observable<Linguagem[]>;

  constructor(private http: HttpClient) {
    this._linguagens = new BehaviorSubject([]);
    this.linguagens$ = this._linguagens.asObservable();
  }

  atualizarLinguagens() {
    return this.getListaLinguagens().pipe(
      tap((linguagens: Linguagem[]) => {
        this._linguagens.next(linguagens);
      })
    );
  }

  getListaLinguagens(): Observable<Linguagem[]> {
    const url = `${environment.linguagensApiUrl}/linguagens`;
    return this.http.get<Linguagem[]>(url);
  }

  curtirLinguagem(linguagem: Linguagem): Observable<any> {
    const url = `${environment.linguagensApiUrl}/linguagens/curtir/${linguagem._id}`;
    return this.http.post<any>(url, {});
  }

}
