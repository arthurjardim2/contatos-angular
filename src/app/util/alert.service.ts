
import { Injectable } from '@angular/core';

export class Mensagem {
    constructor(public tipo: string,
        public texto: string = '',
        public classesCss: {} = {},
        public esconder: boolean = true,
        public visible: boolean = false) {
    }
}

@Injectable()
export class AlertService {

    private currentTimeout: any;

    public mensagem: Mensagem = new Mensagem('', '', {}, true);
    public timeout = 3000;

    constructor() {
    }

    mostrarMensagem(tipo: string, texto: string, esconder: boolean): Mensagem {
        this.mensagem = new Mensagem(tipo, texto, this.montarClasses(tipo), esconder, true);
        console.log(this.mensagem);
        if (esconder) {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem.visible = false;
                console.log(this.mensagem);

            }, this.timeout);
        }
        return this.mensagem;
    }

    montarClasses(tipo: string): {} {
        const classesCss = {
            'alert': true
        };
        classesCss['alert-' + tipo] = true;
        return classesCss;

        // {
        //   'alert': true,
        //   'alert-success': true,
        //   'alert-danger': false
        // }
    }

}

