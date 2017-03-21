import { WebStatisticsPage } from './app.po';

describe('web-statistics App', function() {
  let page: WebStatisticsPage;

  beforeEach(() => {
    page = new WebStatisticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
