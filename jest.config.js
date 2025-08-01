const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
// import { add } from './math';

// describe('add()', () => {
//   it('should return 5 when 2 + 3', () => {
//     expect(add(2, 3)).toBe(5);
//   });

//   it('should return -2 when -1 + -1', () => {
//     expect(add(-1, -1)).toBe(-2);
//   });
// });
