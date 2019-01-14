import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { LinguagemService } from '../../../services/linguagem.service';
import { Linguagem } from '../../../interfaces/linguagem';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public linguagemService: LinguagemService, private toastr: ToastrService, public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.atualizarLinguagens();
  }

  atualizarLinguagens() {
    this.linguagemService.atualizarLinguagens()
      .subscribe(
        () => { },
        () => {
          this.toastr.error('Falha ao atualizar listagem de linguagens.', 'Falha!');
        });
  }

  curtirLinguagem(linguagem: Linguagem) {
    this.linguagemService.curtirLinguagem(linguagem)
      .subscribe(
        () => {
          this.toastr.success(`Você curtiu <b>${linguagem.nome}</b>`, 'Show!');
          this.atualizarLinguagens();
        },
        () => {
          this.toastr.error('Não foi possível curtir a linguagem.', 'Falha!');
        }
      );
  }

}
