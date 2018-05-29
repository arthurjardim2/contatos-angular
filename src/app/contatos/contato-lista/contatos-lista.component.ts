import { Component, OnInit } from '@angular/core';

import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  private currentTimeout: any;
  contatos: Contato[] = [];
  mensagem: {};
  classesCss: {};

  constructor(
      private contatoService: ContatoService,
      private dialogService: DialogService
    ) { }

  async ngOnInit() {
      // exemplo com assync await
      try {
        this.contatos = await this.contatoService.findAll();
      } catch (error) {
        this.mostrarMensagem({ tipo: 'danger', texto: ' ao buscar contatos.', esconder: true});
      }
  }

  async onDelete(contato: Contato) {
    const canDelete = await this.dialogService.confirm('Deseja deletar o contato?');
    if (canDelete) {
      try {
        await this.contatoService.delete(contato);
        this.mostrarMensagem({ tipo: 'success', texto: ' contato deletado', esconder: true});
        this.contatos = this.contatos.filter(c => c.id !== contato.id);
      } catch (error) {
        this.mostrarMensagem({ tipo: 'danger', texto: ' ao deletar contato.', esconder: true});
      }
    }
  }

  mostrarMensagem(mensagem: {tipo: string, texto: string, esconder: boolean }): void {
    this.mensagem = mensagem;
    this.montarClasses(mensagem.tipo);
    if (!mensagem.esconder) {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = setTimeout(() => this.mensagem = undefined, 3000);
      }
    }
  }

  montarClasses(tipo: string): void {

    this.classesCss = {
      'alert': true
    };
    this.classesCss['alert-' + tipo] = true;

    // {
    //   'alert': true,
    //   'alert-success': true,
    //   'alert-danger': false
    // }
  }
}
