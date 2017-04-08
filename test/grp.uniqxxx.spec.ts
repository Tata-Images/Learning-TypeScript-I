import { FnAny, _testSuites } from './_testSuites';
import { ascOrderBy, uniq, uniqBy } from '../src/alpha';
import { expect, should } from 'chai';

import { FnPredicate } from '../src/constants';

should();

const suiteText: string = 'Extract unique elements into a new array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  uniq,
  uniqBy,
];

const a: number[] = [1, 3, 5, 7, 9, 2, 4, 6, 8, 1, 2, 3, 6, 7, 8, 4];
const b: string[] = ['hello', 'world', 'hello', 'quick', 'brown', 'quick'];
const c: any = a.concat(b as any[]);

tests['uniq'] = [
  'return [] for empty array',
  'return [] for null array',
  'return [] for undefined array',
  'number[]: return as is for single element array',
  'number[]: produce new array with unique members of input.',
  'string[]: return as is for single element array',
  'string[]: produce new array with unique members of input.',
  'str/num[]: produce new array with unique members of mixed type input.',
];

tests['uniqBy'] = [
  'return [] for empty array',
  'return [] for null array',
  'return [] for undefined array',
  'object []: return as is for single element array',
  'object []: produce new array with unique members of input.',
  'object []: produce new array with unique members of mixed type input.',
];

inputs['uniq'] = [
  [[]],
  [null],
  [undefined],
  [[1]],
  [a],
  [['hello']],
  [b],
  [c],
];

const fn: FnPredicate = (o: object) => +o['age'];

const d: Array<object> = [
  { age: 20, name: 'Quick' },
  { age: 99, name: 'Brown' },
  { age: 40, name: 'Fox' },
  { age: 80, name: 'Jumps' },
  { age: 60, name: 'Over' },
  { age: 60, name: 'A' },
  { age: 80, name: 'Lazy' },
  { age: 40, name: 'Dog' },
  { age: 99, name: 'The' },
  { age: 20, name: '.' },
];

d.sort(ascOrderBy(fn));

// use '99' as array.sort() is an unstable sort, can result in
// undesirable re-ordering of elements.
const e: Array<object> = d.concat([{ age: '99', name: 'BUG' }]);
e.sort(ascOrderBy(fn));

inputs['uniqBy'] = [
  [[], fn],
  [null, fn],
  [undefined, fn],
  [[{ age: 20, name: 'Quick' }], fn],
  [d, fn],
  [e, fn],
];

answers['uniq'] = [
  [],
  [],
  [],
  [1],
  [1, 3, 5, 7, 9, 2, 4, 6, 8],
  ['hello'],
  ['hello', 'world', 'quick', 'brown'],
  [1, 3, 5, 7, 9, 2, 4, 6, 8, 'hello', 'world', 'quick', 'brown'],
];

answers['uniqBy'] = [
  [],
  [],
  [],
  [{ age: 20, name: 'Quick' }],
  [
    { age: 20, name: 'Quick' },
    { age: 40, name: 'Fox' },
    { age: 60, name: 'Over' },
    { age: 80, name: 'Jumps' },
    { age: 99, name: 'Brown' }
  ],
  [
    { age: 20, name: 'Quick' },
    { age: 40, name: 'Fox' },
    { age: 60, name: 'Over' },
    { age: 80, name: 'Jumps' },
    { age: 99, name: 'Brown' }
  ],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
