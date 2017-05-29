import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card-template.html',
  styleUrls: ['./card.css']
})
export class PokemonCardComponent {
  @Input() pokemon: Object;

  premiado(nome: string) {
    if ( nome === 'charizard' ) {
       return true;
    }

    return false;
  }
}
