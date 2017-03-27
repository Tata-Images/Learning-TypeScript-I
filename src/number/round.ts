import { _round } from '../.private/number/_round';
import { theTypeOf } from '../object/thetypeof';

/**
 * rounding up number, rounding precision determined by [exp]
 *
 * a positive [exp] means precision to the left of decimal point
 * a negative [exp] means precision to the right of the decimal point
 *
 * @since 0.0.1
 * @category Number
 *
 * @export
 * @param {number} value
 * @param {number} [exp=0]
 * @returns {number}
 */
export function round(value: any, exp?: number): number {
  return _round(value, exp);
}
