import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card-template.html',
  styleUrls: ['./card.css']
})
export class PokemonCardComponent {
  @Input() nome: string;
  @Input() id: string;
  @Input() experiencia: string;
  @Input() descricao: string;
  @Input() avatarUrl: string;

  public premiado: boolean = false;

  abrePopup(pokemon: string) {
  	console.log(pokemon);
  	if(pokemon == 'Charizard') {
  		this.premiado = true;
  	}else {
  		this.premiado = false;
  	}
  }

}
