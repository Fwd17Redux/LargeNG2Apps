describe('Home', () => {

  beforeEach(() => {
    browser.get('http://localhost:3000/#/');
  });

  it('shows the heading', () => {
    expect(element(by.css('h1')).getText()).toEqual('Homepage');
  });

});
