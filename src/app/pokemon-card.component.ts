import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card-template.html'
})
export class PokemonCardComponent {
  @Input() nome: string;
  @Input() id: string;
  @Input() experiencia: string;
  @Input() descricao: string;
  @Input() avatarUrl: string;
}
