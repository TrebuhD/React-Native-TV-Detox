describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say hello world - by ID', async () => {
    await expect(element(by.id('helloText'))).toHaveText('Hello world!');
  });

  it('should say hello world - by text', async () => {
    await expect(element(by.text('Hello world!'))).toExist();
  });

  it('should have go to list button', async () => {
    await expect(element(by.id('button_list'))).toExist();
  });

  it('should have go to form button', async () => {
    await expect(element(by.id('button_form'))).toExist();
  });
});
