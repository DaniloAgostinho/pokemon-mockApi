import { Component } from '@angular/core';

import { BuscarPokemonService } from './services/BuscarPokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app-template.html'
})
export class AppComponent  {
  private pokemonPesquisado = new Array();

  constructor(private pokeService: BuscarPokemonService) {

  }

  pesquisarPokemon(texto: string) {
    this.pokemonPesquisado = [this.pokeService.procurarPokemon(texto)];
  }
}
