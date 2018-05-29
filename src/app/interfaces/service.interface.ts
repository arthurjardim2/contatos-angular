import { Observable } from 'rxjs/internal/Observable';

export interface ServiceInterface<T> {
    findAll(): Promise<T[]>;
    find(id: number): Promise<T>;
    create(object: T): Promise<T>;
    update(object: T): Promise<T>;
    delete(object: T): Promise<T>;
    search(term: string, field: string): Observable<T[]>;
}
