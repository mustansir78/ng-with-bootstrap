import { NgWithBootstrapPage } from './app.po';

describe('ng-with-bootstrap App', () => {
  let page: NgWithBootstrapPage;

  beforeEach(() => {
    page = new NgWithBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
