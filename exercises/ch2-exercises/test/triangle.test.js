import { solution } from '../solutions/triangle-solution.js';
import { expect } from 'chai';
import sinon from 'sinon';

const expectedResult = "#\n" + "##\n" + "###\n" + "####\n" + "#####\n" + "######\n" + "#######";

describe('Solution testing for problem "Looping a Triangle" from Chapter 2', () => {
    it('Function solution() matches the expected output given 7 console.log() calls', () => {
        const consoleLogStub = sinon.stub(console, 'log');
        solution();
        const lines = consoleLogStub.getCalls().map((call) => {return call.args[0]});
        consoleLogStub.restore();

        const actual = lines.join('\n');
        expect(actual).to.equal(expectedResult);
    }) 
});
