import { FormControl } from '@angular/forms';

import { validateEmail, validatePhone } from './validators';


describe('validators', () => {

  describe('validateEmail', () => {
    it('returns null when given a valid address', () => {
      let control: FormControl = <FormControl>{ value: 'test@example.com' };
      expect(validateEmail(control)).toBeNull;
    });

    it('returns the correct error when given an invalid address', () => {
      let control: FormControl = <FormControl>{ value: 'test@example' };
      expect(validateEmail(control)).toEqual({ validateEmail: { valid: false } });
    });
  });

  describe('validatePhone', () => {
    it('returns null when given a valid value', () => {
      let control: FormControl = <FormControl>{ value: '+49 123 456 789' };
      expect(validatePhone(control)).toBeNull;
    });

    it('returns the correct error when given an invalid value', () => {
      let control: FormControl = <FormControl>{ value: '1234 abc' };
      expect(validatePhone(control)).toEqual({ validatePhone: { valid: false } });
    });
  });

});
