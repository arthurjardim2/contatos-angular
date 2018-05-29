
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import '../util/rxjs-extensions';

import { ServiceInterface } from '../interfaces/service.interface';
import { Conta } from './conta.model';

@Injectable()
export class ContaService implements ServiceInterface<Conta> {

    private contasUrl = '//localhost:51909/api/conta';
    // private contasUrl = 'app/contas';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {

    }

    async findAll(): Promise<Conta[]> {
        try {
            const resp = await this.http.get(this.contasUrl)
                .toPromise();
            const contas = resp.json() as Conta[];
            return contas;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

    async find(id: number): Promise<Conta> {
        const url = `${this.contasUrl}/${id}`; // app/contas/id
        try {
            const resp = await this.http.get(url)
                .toPromise();
            const conta = resp.json() as Conta;
            return conta;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

    async create(object: Conta): Promise<Conta> {
        try {
            const resp = await this.http.post(this.contasUrl,
                JSON.stringify(object),
                {headers: this.headers}).toPromise();

            return resp.json() as Conta;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async update(object: Conta): Promise<Conta> {
        const url = `${this.contasUrl}/${object.id}`; // app/contas/id
        try {
            const resp = await this.http.put(url,
                { headers: this.headers}).toPromise();

            return object;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(object: Conta): Promise<Conta> {
        const url = `${this.contasUrl}/${object.id}`; // app/contas/id
        try {
            const resp = await this.http.delete(url,
                {headers: this.headers}).toPromise();

            return object;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    search(term: string, field: string): Observable<Conta[]> {
        return this.http
            .get(`${this.contasUrl}/?${field}=${term}`)
            .map(res => res.json() as Conta[]);
    }

    async buscaCep(): Promise<string> {
        const url = '//viacep.com.br/ws/01001000/json/'; // app/contas/id
        try {
            const resp = await this.http.get(url)
                .toPromise();
            return resp.json();
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
}

