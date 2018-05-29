import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Conta } from '../conta.model';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-detalhe',
  templateUrl: './conta-detalhe.component.html',
  styleUrls: ['./conta-detalhe.component.css']
})
export class ContaDetalheComponent implements OnInit {

  conta: Conta;
  private isNew = true;

  constructor(
    private contaService: ContaService,
    private route: ActivatedRoute,
    private location: Location) {

    this.conta = new Conta(0, '', '', 0);

    this.route.params.forEach(async p => {
      const id: number = +p['id'];

      if (id) {
        this.isNew = false;
        this.conta = await contaService.find(id);
        console.log('conta ', this.conta);
      } else {
        this.isNew = true;
      }
      console.log('isNew ', this.isNew);

    });

  }

  ngOnInit() {

  }

  getInputClass(valid: boolean, pristine: boolean): {} {
    return {
      'form-group': true,
      'is-invalid': (!valid && !pristine),
      'is-valid': (valid && !pristine)
    };
  }

  async onSubmit(): Promise<void> {

    if (this.isNew) {
      try {
        const c = await this.contaService.create(this.conta);
        this.location.back();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const c = await this.contaService.update(this.conta);
        this.location.back();
      } catch (error) {
        console.log(error);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}

