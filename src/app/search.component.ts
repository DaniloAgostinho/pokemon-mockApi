import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search-template.html'
})
export class SearchComponent {
  private textoPesquisadoModel: string;
  private formGroup: FormGroup;

  @Output() clicouEmPesquisar: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      textoPesquisado: ['']
    });
  }

  quandoClicarPesquisar() {
    this.clicouEmPesquisar.emit(this.textoPesquisadoModel);
  }
}
