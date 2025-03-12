export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], 
    moduleNameMapper: {
      '\\.(css|scss)$': '<rootDir>/src/mocks/styleMock.js',
    },
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
    ],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
    ],
    coverageReporters: ['html', 'text', 'clover', 'json', 'lcov'],
  };