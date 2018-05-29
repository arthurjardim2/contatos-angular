import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContaListaComponent } from './conta-lista/conta-lista.component';
import { ContasRoutingModule } from './contas-routing.module';
import { ContaService } from './conta.service';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { AlertService } from '../util/alert.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,

    ContasRoutingModule
  ],
  declarations: [ContaListaComponent, ContaDetalheComponent],
  exports: [ContaListaComponent, ContaDetalheComponent],
  providers: [ContaService, AlertService]
})
export class ContasModule { }
