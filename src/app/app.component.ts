import { Component } from '@angular/core';

import { BuscarPokemonService } from './services/BuscarPokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app-template.html',
  styleUrls: ['./app.css']
})
export class AppComponent  {
  private pokemonPesquisado = new Array();
  private clicado: boolean = false;
  private isLoading: boolean = false;

  constructor(private pokeService: BuscarPokemonService) {}

  pesquisarPokemon(texto: string) {
    this.isLoading = true;
    this.clicado = true;
    this.pokeService.procurarPokemon(texto).subscribe( response => {
      this.isLoading = false;
      this.pokemonPesquisado = JSON.parse(response._body);
    } );
  }
}
