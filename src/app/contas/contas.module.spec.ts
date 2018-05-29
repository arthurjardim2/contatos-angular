import { ContasModule } from './contas.module';

describe('ContasModule', () => {
  let contasModule: ContasModule;

  beforeEach(() => {
    contasModule = new ContasModule();
  });

  it('should create an instance', () => {
    expect(contasModule).toBeTruthy();
  });
});
