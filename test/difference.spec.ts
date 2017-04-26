import { expect, should } from 'chai';

import { difference } from '../src/alpha';

should();

describe(difference.name + '() - @category Array', () => {

  describe('should handle nested arrays (upto 1 level deep) properly', () => {

    it('[1,2,[3,[4,6]]] [1,2,[3,[4,5]]] => [3,[4,6]]', () => {
      const base: any[] = [1, 2, [3, [4, 6]]];
      const exclude: any[] = [1, 2, [3, [4, 5]]];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([[3, [4, 6]]]);
    });

    it('[1,2,[3,4,6]] [1,2,[3,4,5]] => [3,4,6]', () => {
      const base: any[] = [1, 2, [3, 4, 6]];
      const exclude: any[] = [1, 2, [3, 4, 5]];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([[3, 4, 6]]);
    });

    it('[1,2,[3,4,5]] [1,3,[3,4,5]] => [2]', () => {
      const base: any[] = [1, 2, [3, 4, 5]];
      const exclude: any[] = [1, 3, [3, 4, 5]];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([2]);
    });

    it('[1,2,[3,4,5]] [1,2,[3,4,5]] => [2]', () => {
      const base: any[] = [1, 2, [3, 4, 5]];
      const exclude: any[] = [1, 2, [3, 4, 5]];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

  describe('should ignore difference of exclude from base', () => {

    it('[1,2,3] [1,2,3,4,5] => []', () => {
      const base: number[] = [1, 2, 3];
      const exclude: number[] = [1, 2, 3, 4, 5];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

  describe('should only extract difference of base from exclude', () => {

    it('[date1,date2] [date1,date3] => [date2]', () => {
      const d1: Date = new Date();
      const d2: Date = new Date(d1.getTime() + 10000);
      const d3: Date = new Date(d1.getTime());
      const d4: Date = new Date(d2.getTime() + 10001);
      const base: any[] = [d1, d2];
      const exclude: any[] = [d3, d4];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([d2]);
    });

    it('[date1,date2] [date1,date2] => []', () => {
      const d1: Date = new Date();
      const d2: Date = new Date(d1.getTime() + 10000);
      const d3: Date = new Date(d1.getTime());
      const d4: Date = new Date(d2.getTime());
      const base: any[] = [d1, d2];
      const exclude: any[] = [d3, d4];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('[{a:1},{b:{c:5},d:2}] [{a:1},{b:{c:3},d:2}] => [{b:{c:5},d:2}]', () => {
      const base: any[] = [{ a: 1 }, { b: { c: 5 }, d: 2 }];
      const exclude: any[] = [{ a: 1 }, { b: { c: 3 }, d: 2 }];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ b: { c: 5 }, d: 2 }]);
    });

    it('[{a:1},{b:{c:3},e:3}] [{a:1},{b:{c:3},d:2}] => [{b:{c:3},e:3}]', () => {
      const base: any[] = [{ a: 1 }, { b: { c: 3 }, e: 3 }];
      const exclude: any[] = [{ a: 1 }, { b: { c: 3 }, d: 2 }];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ b: { c: 3 }, e: 3 }]);
    });

    it('[{a:1},{b:{c:3},d:2}] [{a:1},{b:{c:3},d:2}] => []', () => {
      const base: any[] = [{ a: 1 }, { b: { c: 3 }, d: 2 }];
      const exclude: any[] = [{ a: 1 }, { b: { c: 3 }, d: 2 }];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('[{a:1},{b:2}] [{a:1},{c:3}] => [{b:2}]', () => {
      const base: any[] = [{ a: 1 }, { b: 2 }];
      const exclude: any[] = [{ a: 1 }, { c: 3 }];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(1);
      result.should.deep.equal([{ b: 2 }]);
    });

    it('[{a:1},{b:2}] [{a:1},{b:2}] => []', () => {
      const base: any[] = [{ a: 1 }, { b: 2 }];
      const exclude: any[] = [{ a: 1 }, { b: 2 }];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('[1,2,3,"4",true,false] [1,2,3,"4"] => [true, false]', () => {
      const base: any[] = [1, 2, 3, '4', true, false];
      const exclude: any[] = [1, 2, 3, '4'];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([true, false]);
    });

    it('[1,2,3,"4","5"] [1,2,3,4,5] => ["4","5"]', () => {
      const base: any[] = [1, 2, 3, '4', '5'];
      const exclude: number[] = [1, 2, 3, 4, 5];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal(['4', '5']);
    });

    it('[1,2,3,"4","5"] [1,2,3] => ["4","5"]', () => {
      const base: any[] = [1, 2, 3, '4', '5'];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal(['4', '5']);
    });

    it('[1,2,3,4,5] [1,2] => [3,4,5]', () => {
      const base: number[] = [1, 2, 3, 4, 5];
      const exclude: number[] = [1, 2];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(3);
      result.should.deep.equal([3, 4, 5]);
    });

    it('[1,2,3,null] [1,2] => [3,null]', () => {
      const base: number[] = [1, 2, 3, null];
      const exclude: number[] = [1, 2];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([3, null]);
    });

    it('[1,2,3,undefined] [1,2] => [3,undefined]', () => {
      const base: number[] = [1, 2, 3, undefined];
      const exclude: number[] = [1, 2];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([3, undefined]);
    });

    it('[1,2,3] [1,2,3] => []', () => {
      const base: number[] = [1, 2, 3];
      const exclude: number[] = [1, 2, 3];
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

  describe('should operate as a pure function', () => {

    it('both the arrays passed in will not be altered', () => {
      const originalBase: number[] = [1, 2, 5, 6];
      const originalExclude: number[] = [1, 2, 3];
      const base: number[] = originalBase.slice(0);
      const exclude: number[] = originalExclude.slice(0);
      const result: number[] = difference(base, exclude);
      result.should.have.lengthOf(2);
      result.should.deep.equal([5, 6]);
      base.should.deep.equal(originalBase);
      exclude.should.deep.equal(originalExclude);
    });

  });

  describe('should handle invalid parameters properly', () => {

    it('[1,2,3] [] => [1,2,3]', () => {
      const base: number[] = [1, 2, 3];
      const result: number[] = difference(base, []);
      result.should.have.lengthOf(3);
      result.should.deep.equal(base);
    });

    it('[1,2,3] null => [1,2,3]', () => {
      const base: number[] = [1, 2, 3];
      const result: number[] = difference(base, null);
      result.should.have.lengthOf(3);
      result.should.deep.equal(base);
    });

    it('[1,2,3] undefined => [1,2,3]', () => {
      const base: number[] = [1, 2, 3];
      const result: number[] = difference(base, undefined);
      result.should.have.lengthOf(3);
      result.should.deep.equal(base);
    });

    it('[] [1,2,3] => []', () => {
      const result: number[] = difference([], [1, 2, 3]);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('null [1,2,3] => []', () => {
      const result: number[] = difference(null, [1, 2, 3]);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

    it('undefined [1,2,3] => []', () => {
      const result: number[] = difference(undefined, [1, 2, 3]);
      result.should.have.lengthOf(0);
      result.should.deep.equal([]);
    });

  });

});
