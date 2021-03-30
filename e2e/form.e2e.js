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

  it('should go back to home screen when home button is pressed', async () => {
    const homeButton = element(by.id('button_home'));
    await expect(homeButton).toExist();
    await homeButton.tap();
    // user is on home screen
    await expect(element(by.text('Hello world!')));
  });

  it('should disable the button if the form is empty', async () => {
    const submitButton = element(by.id('button_submit_form'));
    const submitButtonDisabled = element(by.id('button_submit_form--disabled'));

    await expect(submitButton).not.toExist();
    await expect(submitButtonDisabled).toExist();
  });

  it('should return an error when the email is bad', async () => {
    const emailInput = element(by.id('email_input'));
    const passwordInput = element(by.id('password_input'));

    await emailInput.typeText('fakeuser@xite.com');
    await passwordInput.typeText('12345');
    await passwordInput.tapReturnKey();

    await element(by.id('button_submit_form')).tap();

    const errorText = element(by.id('error_text'));
    await expect(errorText).toHaveText('User does not exist');
  });

  it('should return an error when the password is shorter than 5 characters', async () => {
    const emailInput = element(by.id('email_input'));
    const passwordInput = element(by.id('password_input'));

    await emailInput.typeText('me@google.com');
    await passwordInput.typeText('1234');
    await passwordInput.tapReturnKey();

    await element(by.id('button_submit_form')).tap();

    const errorText = element(by.id('error_text'));
    await expect(errorText).toHaveText('Password too short!');
  });

  it('should resolve successfully if inputs are correctly filled', async () => {
    const emailInput = element(by.id('email_input'));
    const passwordInput = element(by.id('password_input'));

    await emailInput.typeText('me@google.com');
    await passwordInput.typeText('12345');
    await passwordInput.tapReturnKey();

    await element(by.id('button_submit_form')).tap();

    const successText = element(by.id('success_text'));
    await expect(successText).toBeVisible();
  });
});
