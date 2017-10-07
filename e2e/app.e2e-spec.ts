import { AppPage } from './app.po';

<<<<<<< HEAD
describe('bird-count-app App', () => {
=======
describe('components101 App', () => {
>>>>>>> 10bc0cafe905e187fbc64d1531494f4b85d63b7f
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
