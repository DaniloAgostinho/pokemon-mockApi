import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ PokemonCardComponent ],
  declarations: [ PokemonCardComponent ]
})
export class PokemonCardModule {

}
