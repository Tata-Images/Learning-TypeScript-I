/**
 * Function to return the mean numbers within the array passed in.
 *
 * Nested array will be searched deep inside as well.
 *
 * Option to pass in an iteratee to convert all value before checking
 * for max.
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 18, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @param {AnyIteratee} [iteratee]
 * @returns {Numeric}
 */

import { AnyIteratee, Numeric, Numerics } from '../constants';

import { _calcBy } from '../private/_calcBy';

export function meanDeepBy(array: Numerics[], iteratee?: AnyIteratee): Numeric {

  return _calcBy(array, { iteratee, operand: 'mean', deep: true });

}
