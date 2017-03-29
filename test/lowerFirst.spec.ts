import { expect, should } from 'chai';

import { lowerFirst } from '../src/alpha';

should();


describe('lowerFirst()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'fooBar';

    it('lowerFirst __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = lowerFirst(str1);
      str2.should.equal('__foo__bar__');
    });

    it('lowerFirst --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = lowerFirst(str1);
      str2.should.equal('--fOO==BAR++');
    });

    it('lowerFirst ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = lowerFirst(str1);
      str2.should.equal('()foo[]bar{}');
    });

    it('lowerFirst ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = lowerFirst(str1);
      str2.should.equal('..foO,,baR;;');
    });

    it('lowerFirst ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = lowerFirst(str1);
      str2.should.equal('::foO""BaR\'\'');
    });

    it('lowerFirst french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = lowerFirst(str1);
      str2.should.equal('est-ce que vous pouvez l\'écrire?');
    });

    it('lowerFirst chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = lowerFirst(str1);
      str2.should.equal('你好嗎？ 我很好，哈！');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = lowerFirst(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = lowerFirst(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = lowerFirst(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = lowerFirst(str1);
      str2.should.equal(',./\';[]=-+_}{\":?\`~!@#$%^&*()><');
    });


  });

});
