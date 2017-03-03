import { FormControl } from '@angular/forms';
import * as validator from 'validator';

export function validateEmail(c: FormControl) {
  return validator.isEmail(String(c.value)) ? null : { validateEmail: { valid: false } };
}

export function validatePhone(c: FormControl) {
  return validator.isMobilePhone(String(c.value), 'de-DE') ? null : { validatePhone: { valid: false } };
}

export function validateFQDN(c: FormControl) {
  return validator.isFQDN(String(c.value)) ? null : { validateFQDN: { valid: false } };
}
