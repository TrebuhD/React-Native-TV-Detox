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

  it.skip('should display the page title correctly', async () => {
    await expect(element(by.id('page_title'))).toHaveText('List');
  });

  it.skip('should go back to home screen when home button is pressed', async () => {
    const homeButton = element(by.id('button_home'));
    await expect(homeButton).toExist();
    await homeButton.tap();
    // user is on home screen
    await expect(element(by.text('Hello world!')));
  });

  it.skip('should display user details when list item is selected ', async () => {
    const itemId = 1;

    // should display message when nothing is selected
    const emptyMessage = element(by.id('empty_list_message'));
    expect(emptyMessage).toHaveText('Select an item in the list');

    const listItem = element(by.id(`listItem_${itemId}`));
    listItem.tap();
    // does not display empty message after tapping
    expect(emptyMessage).not.toExist();

    // displays user data in details screen
    const listDetails = element(by.id('list_details'));
    expect(listDetails).toHaveText(mockData[itemId].firstName);
    expect(listDetails).toHaveText(mockData[itemId].lastName);
    expect(listDetails).toHaveText(mockData[itemId].email);
    expect(listDetails).toHaveText(mockData[itemId].country);
    expect(listDetails).toHaveText(mockData[itemId].favPlant);
    expect(listDetails).toHaveText(mockData[itemId].language);
  });

  it('should display user details when a second list item is selected ', async () => {
    const firstItemId = 0;
    const lastItemId = mockData.length - 1;

    const firstListItem = element(by.id(`listItem_${firstItemId}`));
    const listDetails = element(by.id('list_details'));
    const list = element(by.id('list'));

    // check first item
    firstListItem.tap();
    expect(listDetails).toHaveText(mockData[firstItemId].firstName);

    // swipe to the end of the list
    list.swipe('up', 'slow', 1.0);

    // check if the last menu item and its details are visible
    const lastListItem = element(by.id(`listItem_${lastItemId}`));
    expect(lastListItem).toBeVisible();
    expect(firstListItem).not.toBeVisible();

    lastListItem.tap();
    expect(listDetails).toHaveText(mockData[lastItemId].firstName);
    expect(listDetails).toHaveText(mockData[lastItemId].lastName);
  });
});
