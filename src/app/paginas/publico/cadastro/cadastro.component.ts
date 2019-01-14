import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public usuario: Usuario = <Usuario>{};
  public termoUsuario = false;

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    this.usuarioService.cadastrar(this.usuario).subscribe(
      () => {
        this.authService.logar(this.usuario).subscribe(() => {
          this.toastr.success('Cadastro realizado com sucesso.', 'Show!');
        });
      },
      (erro) => {
        if (erro.status && erro.status === 409) {
          this.toastr.error('Usuário já cadastrado. Experimente utilizar outro e-mail.', 'Falha!');
        } else {
          this.toastr.error('Não foi possível realizar cadastro.', 'Falha!');
        }
      }
    );
  }
}
