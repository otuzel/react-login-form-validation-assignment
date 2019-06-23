import { validations } from '../utils/validation';

it('should not accept empty username', () => {
  expect(validations.username.isMinLengthOK('')).toBe(false);
});

it('should not accept long username', () => {
  expect(validations.username.isMaxLengthOK('my3454..3///verylone')).toBe(false);
})

it('should not accept uppercase password', () => {
  expect(validations.password.isLowerCase('aabbABC')).toBe(false);
});

it('should not accept empty password', () => {
  expect(validations.password.isMinLengthOK('')).toBe(false);
});

it('should not accept iOI characters', () => {
  expect(validations.password.isCharsValid('iOI')).toBe(false);
});

it('should have at least two paired character', () => {
  expect(validations.password.isPairedChars('aabb')).toBe(true);
});

it('should have at least one set of consecutive characters', () => {
  expect(validations.password.isConsecutiveChars('abc')).toBe(true);
});
