import { Angular2v1Page } from './app.po';

describe('angular2v1 App', () => {
  let page: Angular2v1Page;

  beforeEach(() => {
    page = new Angular2v1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
