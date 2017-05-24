import { Directive, ElementRef, Input , Output, EventEmitter, HostListener, OnInit} from '@angular/core';


@Directive({
  selector: '[opt-imagem]'
})

export class OpcoesImagemDirective implements OnInit {

	@Input()  borda: string;
	@Output() alerta: EventEmitter = new EventEmitter<any>();

	@Input() pokemon: string;


	 constructor(private el: ElementRef) {
		// if ternario // this.el.nativeElement.style.border = (this.borda.trim() !== '' ? this.borda : '');
	 }

	  @HostListener('mouseenter') onMouseEnter() {
    	console.log(this.pokemon);

    	this.alerta.emit(this.pokemon);
  	  }

	 ngOnInit() {
	 	console.log(this.borda);
	 	if (this.borda && this.borda.trim() !== '') {
	 		this.el.nativeElement.style.border = this.borda;
	 	}
	 }
}