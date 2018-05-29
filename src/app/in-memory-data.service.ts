import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';
import { Conta } from './contas/conta.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        // tslint:disable-next-line:prefer-const
        const contatos: Contato[] = [
            {id: 1, nome: 'ZéDasCouve', email: 'zedascouve@sacolao.com.br', telefone: '21 6665-4446'},
            {id: 2, nome: 'Pedro', email: 'pedro@sacolao.com.br', telefone: '21 6636-4663'},
            {id: 3, nome: 'Thiago', email: 'thiago@sacolao.com.br', telefone: '21 6655-4545'},
            {id: 4, nome: 'Joao', email: 'joao@sacolao.com.br', telefone: '21 7998-6456'},
            {id: 5, nome: 'Jacó', email: 'jaco@sacolao.com.br', telefone: '21 4647-4545'}
        ];

        const contas: Conta[] = [
            {id: 1, descricao: 'Itau', usuario: 'arthur', saldo: 10},
            {id: 2, descricao: 'Bradesco', usuario: 'arthur', saldo: 100},
            {id: 3, descricao: 'Itau', usuario: 'Ze das Couve', saldo: 200},
            {id: 4, descricao: 'Bradesco', usuario: 'Ze das Couve', saldo: 250},
            {id: 5, descricao: 'Itau', usuario: 'Pedro', saldo: 200},
            {id: 6, descricao: 'Bradesco', usuario: 'Pedro', saldo: 250},
        ];

        return { contatos, contas };
    }
}
