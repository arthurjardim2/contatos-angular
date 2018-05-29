import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosListaComponent } from './contato-lista/contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';
import { ContatoBuscaComponent } from './contato-busca/contato-busca.component';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule
  ],
  declarations: [ContatosListaComponent,
    ContatoDetalheComponent,
    ContatoBuscaComponent],

  exports: [ContatosListaComponent,
    ContatoDetalheComponent,
    ContatoBuscaComponent
  ],

  providers: [ContatoService]
})
export class ContatosModule { }
