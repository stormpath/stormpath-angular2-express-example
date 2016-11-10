import { Angular2ExpressExamplePage } from './app.po';

describe('angular2-express-stormpath-example App', function() {
  let page: Angular2ExpressExamplePage;

  beforeEach(() => {
    page = new Angular2ExpressExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
