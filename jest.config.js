module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?', '!src/**/stories.jsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
