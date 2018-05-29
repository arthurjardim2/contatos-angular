import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import './util/rxjs-extensions';

import { ContatosModule } from './contatos/contatos.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule,  } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { DialogService } from './contatos/dialog.service';
import { ContasModule } from './contas/contas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 700 }),
    FormsModule,

    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),

    ContatosModule,
    AppRoutingModule,
    ContasModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
