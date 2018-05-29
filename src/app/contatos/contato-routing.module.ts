
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContatosListaComponent } from './contato-lista/contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';

const CONTATO_ROUTES: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CONTATO_ROUTES)
     ],
    exports: [RouterModule],
    providers: [],
})
export class ContatoRoutingModule {}
