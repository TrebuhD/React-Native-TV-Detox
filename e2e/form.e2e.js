describe('List screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // go to list screen
    await device.reloadReactNative();
    await element(by.id('button_form')).tap();
  });

  it('should display the page title correctly', async () => {
    await expect(element(by.id('page_title'))).toHaveText('Form');
  });
});
