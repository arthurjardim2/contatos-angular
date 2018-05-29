import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-busca',
  templateUrl: './contato-busca.component.html',
  styleUrls: ['./contato-busca.component.css']
})
export class ContatoBuscaComponent implements OnInit, OnChanges {

  @Input() busca: string;
  @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
  contatos: Observable<Contato[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();
  isLoading = false;

  constructor(
    private contatoService: ContatoService,
    private router: Router
    ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    const busca: SimpleChange = changes['busca'];
    this.search(busca.currentValue);
  }

  ngOnInit() {
    this.contatos = this.termosDaBusca
      .debounceTime(400) // aguarde por 300 ms para emitir novos eventos
      .distinctUntilChanged() // descarta ultima busca repetida
      .do( () => this.isLoading = true)
      .switchMap(termo => termo ? this.contatoService.search(termo, 'nome') : Observable.of<Contato[]>([]))
      .do( () => this.isLoading = false)
      .catch(erro => {
        console.log(erro);
        return Observable.of<Contato[]>([]);
      });
  }

  search(termo: string): void {
    this.termosDaBusca.next(termo); // add novo termo na busca
    this.buscaChange.emit(termo); // emite o evento avisando aos componentes externos que houve alteração
  }

  verDetalhe(contato: Contato) {
    const link = ['contato/save', contato.id];
    this.router.navigate(link);
    this.buscaChange.emit('');
  }
}
