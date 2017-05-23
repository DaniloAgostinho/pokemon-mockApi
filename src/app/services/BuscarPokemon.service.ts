import { Injectable } from '@angular/core';

@Injectable()
export class BuscarPokemonService {

  mockApi = [
    {
      nome: 'bulbasaur',
      id: '1' ,
      experiencia: '64',
      descricao: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back.',
      avatarUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
      nome: 'Yungoos',
      id: '2',
      experiencia: '734',
      descricao: 'With its sharp fangs, it will bite anything. It did not originally live in',
      avatarUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/734.png'
    },
    {
      nome: 'Gumshoos',
      id: '3',
      experiencia: '735',
      descricao: 'When it finds a trace of its prey, it patiently stakes out the location',
      avatarUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/735.png'
    },
    {
      nome: 'Charmander',
      id: '4',
      experiencia: '004',
      descricao: 'The flame that burns at the tip of its tail is an indication of its emotions.',
      avatarUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    },
    {
      nome: 'Charizard',
      id: '5',
      experiencia: '006',
      descricao: 'Charizard flies around the sky in search of powerful opponents.',
      avatarUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    }
  ];

  procurarPokemon(texto: string) {
    return this.getPokemon(texto);
  }

  getPokemon(texto: string) {
    let result;
    this.mockApi.map(pokemon => {
      if (pokemon.nome == texto) {
        result = pokemon;
      }
    });

    return result;
  }
}
