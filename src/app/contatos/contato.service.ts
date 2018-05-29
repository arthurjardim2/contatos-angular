import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import '../util/rxjs-extensions';

import { Contato } from './contato.model';
import { ServiceInterface } from '../interfaces/service.interface';


@Injectable()
export class ContatoService implements ServiceInterface<Contato> {

    private contatosUrl = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {

    }

    find(id: number): Promise<Contato> {
        return this.findAll()
            .then((lista: Contato[]) => {
                return lista.find(c => c.id === id);
            });
    }

    async findAll(): Promise<Contato[]> {

        try {
            const resp = await this.http.get(this.contatosUrl)
                .toPromise();
            return Promise.resolve(resp.json() as Contato[]);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async create(contato: Contato): Promise<Contato> {
        try {
            const resp = await this.http.post(this.contatosUrl,
                JSON.stringify(contato),
                {headers: this.headers}).toPromise();

            return resp.json() as Contato;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async update(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/id
        try {
            const resp = await this.http.put(url,
                { headers: this.headers}).toPromise();

            return contato;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/id
        try {
            const resp = await this.http.delete(url,
                {headers: this.headers}).toPromise();

            return contato;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    search(term: string, field: string): Observable<Contato[]> {
        return this.http
            .get(`${this.contatosUrl}/?${field}=${term}`)
            .map(res => res.json() as Contato[]);
    }

}
