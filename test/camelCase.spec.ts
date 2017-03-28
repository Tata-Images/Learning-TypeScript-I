import { expect, should } from 'chai';

import { camelCase } from '../src/alpha';

should();


describe('camelCase()\n', () => {

  describe('should...', () => {

    let str1: string = '';
    let str2: string = '';
    const answer: string = 'fooBar';

    it('camelCase __foo__bar__.', () => {
      str1 = '__foo__bar__';
      str2 = camelCase(str1);
      str2.should.equal(answer);
    });

    it('camelCase --FOO==BAR++.', () => {
      str1 = '--FOO==BAR++';
      str2 = camelCase(str1);
      str2.should.equal(answer);
    });

    it('camelCase ()Foo[]bar{}.', () => {
      str1 = '()Foo[]bar{}';
      str2 = camelCase(str1);
      str2.should.equal(answer);
    });

    it('camelCase ..FoO,,baR;;.', () => {
      str1 = '..FoO,,baR;;';
      str2 = camelCase(str1);
      str2.should.equal(answer);
    });

    it('camelCase ::foO""BaR\'\'.', () => {
      str1 = '::foO""BaR\'\'';
      str2 = camelCase(str1);
      str2.should.equal(answer);
    });

    it('camelCase french sentence.', () => {
      str1 = 'est-ce que vous pouvez l\'écrire?';
      str2 = camelCase(str1);
      str2.should.equal('estCeQueVousPouvezLÉcrire');
    });

    it('camelCase chinese sentence.', () => {
      str1 = '你好嗎？ 我很好，哈！';
      str2 = camelCase(str1);
      str2.should.equal('你好嗎我很好哈');
    });

    it('return \'\' with empty string passed in.', () => {
      str1 = '';
      str2 = camelCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with null string passed in.', () => {
      str1 = null;
      str2 = camelCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with undefined string passed in.', () => {
      str1 = undefined;
      str2 = camelCase(str1);
      str2.should.equal('');
    });

    it('return \'\' with a string fill of word breakers passed in.', () => {
      str1 = ',./\';[]=-+_}{\":?\`~!@#$%^&*()><';
      str2 = camelCase(str1);
      str2.should.equal('');
    });


  });

});