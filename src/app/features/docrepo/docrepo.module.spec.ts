import { DocrepoModule } from './docrepo.module';

describe('DocrepoModule', () => {
  let docrepoModule: DocrepoModule;

  beforeEach(() => {
    docrepoModule = new DocrepoModule();
  });

  it('should create an instance', () => {
    expect(docrepoModule).toBeTruthy();
  });
});
