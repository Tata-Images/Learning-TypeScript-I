/**
 * Private function perform a binary search on an array, returning the
 * index of the target, or -1 if not found.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * This is implemented as a wrapper for _binarySearchArray()
 *
 * Read the options section in the _binarySearchArray() to
 * understand what kind of options can be set.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @param {BinarySearchOption} [option]
 * @returns {number}
 */

import { BinarySearchOption } from '../constants';
import { _binarySearchArray } from './_binarySearchArray';

export function _binarySearchIndexBy(array: any[], target: any,
  option?: BinarySearchOption): number {

  // setup the option parameter, set insert mode off as this function
  // is for searching the index of target
  option = option || {};
  option.insert = false;

  return _binarySearchArray(array, target, option);

}