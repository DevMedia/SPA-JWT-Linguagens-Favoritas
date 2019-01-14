import { Component, Input } from '@angular/core';

import { Linguagem } from '../../interfaces/linguagem';

@Component({
  selector: 'app-card-grafico-linguagens',
  templateUrl: './card-grafico-linguagens.component.html',
  styleUrls: ['./card-grafico-linguagens.component.css']
})
export class CardGraficoLinguagensComponent {
  public nomesLinguagens: string[];
  public curtidasLinguagens: number[];
  public tipoGrafico = 'doughnut';

  @Input() set linguagens(linguagens: Linguagem[]) {
    if (linguagens) {
      this.nomesLinguagens = linguagens.map(linguagem => {
        return linguagem.nome;
      });
      this.curtidasLinguagens = linguagens.map(linguagem => {
        return linguagem.numeroUsuarios;
      });
    }
  }
}
