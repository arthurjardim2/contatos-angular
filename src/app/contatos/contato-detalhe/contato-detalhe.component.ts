import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ContatoService } from '../contato.service';
import { Contato } from '../contato.model';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit {

  contato: Contato;
  private isNew = true;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location) {

    this.contato = new Contato(0, '', '', '');

    this.route.params.forEach(async p => {
      const id: number = +p['id'];

      if (id) {
        this.isNew = false;
        this.contato = await contatoService.find(id);
      } else {
        this.isNew = true;
      }

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
        const c = await this.contatoService.create(this.contato);
        this.location.back();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const c = await this.contatoService.update(this.contato);
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
