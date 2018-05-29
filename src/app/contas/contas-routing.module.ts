
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContaListaComponent } from './conta-lista/conta-lista.component';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';

const routes: Routes = [
    {
        path: 'contas',
        component: ContaListaComponent
    },
    {
        path: 'conta/save',
        component: ContaDetalheComponent
    },
    {
        path: 'conta/save/:id',
        component: ContaDetalheComponent
    }
    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContasRoutingModule {}

