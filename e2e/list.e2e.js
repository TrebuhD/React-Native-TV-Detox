import mockData from '../src/list/listMockData.json';

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

  it('should display user details when list item is selected ', async () => {
    const itemId = 1;

    // should display message when nothing is selected
    const emptyMessage = element(by.id('empty_list_message'));
    await expect(emptyMessage).toBeVisible();

    const listItem = element(by.id(`listItem_${itemId}`));
    await listItem.tap();
    // does not display empty message after tapping
    await expect(emptyMessage).not.toExist();

    // displays user data in details screen
    await expect(element(by.id('list_details__first_name'))).toHaveText(
      `First name: ${mockData[itemId].firstName}`
    );
    await expect(element(by.id('list_details__last_name'))).toHaveText(
      `Last name: ${mockData[itemId].lastName}`
    );
    await expect(element(by.id('list_details__email'))).toHaveText(
      `Email: ${mockData[itemId].email}`
    );
    await expect(element(by.id('list_details__country'))).toHaveText(
      `Country: ${mockData[itemId].country}`
    );
    await expect(element(by.id('list_details__plant'))).toHaveText(
      `Favorite plant name: ${mockData[itemId].favPlant}`
    );
    await expect(element(by.id('list_details__language'))).toHaveText(
      `Language: ${mockData[itemId].language}`
    );
  });

  it('should display user details when another item is selected ', async () => {
    const firstItemId = 0;
    const lastItemId = mockData.length - 1;

    const firstListItem = element(by.id(`listItem_${firstItemId}`));
    const list = element(by.id('list'));

    // check first item
    await firstListItem.tap();
    await expect(element(by.id('list_details__first_name'))).toHaveText(
      `First name: ${mockData[firstItemId].firstName}`
    );

    // swipe to the end of the list (need to swipe twice)
    await list.swipe('up', 'fast', 1.0);
    await list.swipe('up', 'fast', 0.5);

    // check if the last menu item and its details are visible
    const lastListItem = element(by.id(`listItem_${lastItemId}`));
    await expect(lastListItem).toBeVisible();
    await expect(firstListItem).not.toBeVisible();

    await lastListItem.tap();
    await expect(element(by.id('list_details__first_name'))).toHaveText(
      `First name: ${mockData[lastItemId].firstName}`
    );
    await expect(element(by.id('list_details__last_name'))).toHaveText(
      `Last name: ${mockData[lastItemId].lastName}`
    );
  });
});
