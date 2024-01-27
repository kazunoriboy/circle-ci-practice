const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');
test('getTimezoneOffsetHours return -9', () => {
  console.log(getTimezoneOffsetHours());
  expect(getTimezoneOffsetHours()).toBe(-9);
})
