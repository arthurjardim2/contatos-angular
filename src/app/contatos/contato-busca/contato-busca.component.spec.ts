import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoBuscaComponent } from './contato-busca.component';

describe('ContatoBuscaComponent', () => {
  let component: ContatoBuscaComponent;
  let fixture: ComponentFixture<ContatoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
