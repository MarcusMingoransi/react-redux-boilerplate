// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// roots: ['<rootDir>/src'],
// transform: {
//   '^.+\\.tsx?$': 'ts-jest',
// },
// testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
// moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// snapshotSerializers: ['enzyme-to-json/serializer'],
// }

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  roots: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
