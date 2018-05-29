import { ContatosModule } from './contatos.module';

describe('ContatosModule', () => {
  let contatosModule: ContatosModule;

  beforeEach(() => {
    contatosModule = new ContatosModule();
  });

  it('should create an instance', () => {
    expect(contatosModule).toBeTruthy();
  });
});
