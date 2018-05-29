import { Component, OnInit } from '@angular/core';

import { Conta } from '../conta.model';
import { DialogService } from '../../contatos/dialog.service';
import { ContaService } from '../conta.service';
import { AlertService, Mensagem } from '../../util/alert.service';

@Component({
  selector: 'app-conta-lista',
  templateUrl: './conta-lista.component.html',
  styleUrls: ['./conta-lista.component.css']
})
export class ContaListaComponent implements OnInit {

  contas: Conta[] = [];
  mensagem: Mensagem = new Mensagem('', '', {}, true);

  constructor(
    private contaService: ContaService,
    private dialogService: DialogService,
    private alertService: AlertService) { }

  async ngOnInit() {

    // const resp = await this.contaService.buscaCep();
    // console.log(resp);

    // exemplo com assync await
    try {
      this.contas = await this.contaService.findAll();
    } catch (error) {
      const msg = ` ao buscar contas.`;
      this.mensagem = this.alertService.mostrarMensagem('danger', msg, true);
    }
  }

  async onDelete(conta: Conta) {
    const canDelete = await this.dialogService.confirm('Deseja deletar a conta?');
    if (canDelete) {
      try {
        await this.contaService.delete(conta);
        this.mensagem = this.alertService.mostrarMensagem('success', ' conta deletada', true);
        this.contas = this.contas.filter(c => c.id !== conta.id);
      } catch (error) {
        this.mensagem = this.alertService.mostrarMensagem('danger', ' ao deletar conta.', true);
      }
    }
  }

}
