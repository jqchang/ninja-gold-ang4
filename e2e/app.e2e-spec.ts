import { NinjaGoldPage } from './app.po';

describe('ninja-gold App', () => {
  let page: NinjaGoldPage;

  beforeEach(() => {
    page = new NinjaGoldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
