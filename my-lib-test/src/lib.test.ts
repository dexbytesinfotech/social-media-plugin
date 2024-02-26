// lib.test.ts
import { expect } from 'chai';
import { add } from './lib';

describe('add', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1,  2);
    expect(result).to.equal(3);
  });
});
