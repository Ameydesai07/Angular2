import { AgBookPage } from './app.po';

describe('ag-book App', () => {
  let page: AgBookPage;

  beforeEach(() => {
    page = new AgBookPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
