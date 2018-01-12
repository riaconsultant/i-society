import { AssetstrackerModule } from './assetstracker.module';

describe('AssetstrackerModule', () => {
  let assetstrackerModule: AssetstrackerModule;

  beforeEach(() => {
    assetstrackerModule = new AssetstrackerModule();
  });

  it('should create an instance', () => {
    expect(assetstrackerModule).toBeTruthy();
  });
});
