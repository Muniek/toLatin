const { toLatin } = require('./index.js')

test('Returns digit for string with digits', () => {
  expect(toLatin('1009')).toBe('1009')
})

test('Returns the original value when input is a Number', () => {
  expect(toLatin(1009)).toBe(1009)
})

test('Returns the original value when input is not possible to latinize', () => {
  expect(toLatin('命医五事掲成医投')).toBe('命医五事掲成医投')
})

test('Returns the original value when input is not possible to latinize', () => {
  expect(toLatin('命医五事掲成医投')).toBe('命医五事掲成医投')
})

test('Returns latinized output for polish characters', () => {
  expect(toLatin('Zażółć gęślą jaźń')).toBe('Zazolc gesla jazn')
})

test('Returns latinized output for german characters', () => {
  expect(toLatin('ä, ö, ü')).toBe('a, o, u')
})
