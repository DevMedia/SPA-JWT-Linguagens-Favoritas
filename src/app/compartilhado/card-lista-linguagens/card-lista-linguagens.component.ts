import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Linguagem } from '../../interfaces/linguagem';

@Component({
  selector: 'app-card-lista-linguagens',
  templateUrl: './card-lista-linguagens.component.html',
  styleUrls: ['./card-lista-linguagens.component.css']
})
export class CardListaLinguagensComponent {
  @Input() linguagens: Linguagem[];
  @Output() curtida: EventEmitter<Linguagem> = new EventEmitter<Linguagem>();

  curtirLinguagem(linguagem: Linguagem) {
    this.curtida.emit(linguagem);
  }

}
