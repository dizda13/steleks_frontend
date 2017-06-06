import { Ang2SteleksPage } from './app.po';

describe('ang2-steleks App', () => {
  let page: Ang2SteleksPage;

  beforeEach(() => {
    page = new Ang2SteleksPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
