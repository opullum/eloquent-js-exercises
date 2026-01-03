import { solution } from '../solutions/chessboard-solution.js';
import { expect } from 'chai';
import sinon from 'sinon';

const expectedPattern =
	' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ';

describe('Solution testing for Chessboard problem from Chapter 2', () => {
	it('Function solution() logs expected output for board of size 8', () => {
		const consoleLogStub = sinon.stub(console, 'log');
		solution();
		const lines = consoleLogStub.getCalls().map((call) => call.args[0]);
		consoleLogStub.restore();

		let actual = lines.join('\n');
		if (actual.endsWith('\n')) {
			actual = actual.slice(0, -1);
		}
		expect(actual).to.equal(expectedPattern);
	});
});
