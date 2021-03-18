describe('List screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // go to list screen
    await device.reloadReactNative();
    await element(by.id('button_list')).tap();
  });

  it('should display the page title correctly', async () => {
    await expect(element(by.id('page_title'))).toHaveText('List');
  });

  it('should go back to home screen when home button is pressed', async () => {
    const homeButton = element(by.id('button_home'));
    await expect(homeButton).toExist();
    await homeButton.tap();
    // user is on home screen
    await expect(element(by.text('Hello world!')));
  });
});
