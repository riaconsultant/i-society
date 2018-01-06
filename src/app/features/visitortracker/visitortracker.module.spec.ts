import { VisitortrackerModule } from './visitortracker.module';

describe('VisitortrackerModule', () => {
  let visitortrackerModule: VisitortrackerModule;

  beforeEach(() => {
    visitortrackerModule = new VisitortrackerModule();
  });

  it('should create an instance', () => {
    expect(visitortrackerModule).toBeTruthy();
  });
});
