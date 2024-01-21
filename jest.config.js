/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/lib/proto/*'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/lib/proto/*'],
  setupFiles: ['<rootDir>/.jest/envVars.js']
}
