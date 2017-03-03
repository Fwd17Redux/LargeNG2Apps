import { FormGroup } from '@angular/forms';
import { Map } from 'immutable';

/**
 * Base class for *dumb* components
 *
 * Data is transfered via Inputs and Outputs, no Store or Actions allowed.
 *
 * @export
 * @class PresentationalComponent
 */
export class PresentationalComponent {

  /**
   * ImmutableJS aware track function
   *
   * Mainly used in ngFor trackBy
   *
   * @param {number} index
   * @param {Map<string, any>} item
   * @returns {number}
   *
   * @memberOf PresentationalComponent
   */
  identify(index: number, item: Map<string, any>): number {
    return item.hashCode();
  }

   /**
    * Tests, wether a form component has errors
    *
    * @param {FormGroup} form
    * @param {string} fieldName
    * @param {string} [errorName]
    * @returns {boolean}
    *
    * @memberOf PresentationalComponent
    */
   hasError(form: FormGroup, fieldName: string, errorName?: string): boolean {
     if (form.controls[fieldName].untouched) {
       return false;
     }

    if (errorName) {
      return !!(form.controls[fieldName].errors && form.controls[fieldName].errors[errorName]);
    } else {
      return !!form.controls[fieldName].errors;
    }
  }

}
