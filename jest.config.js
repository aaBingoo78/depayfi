module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.git', '/playwright/'],
  setupFiles: ['./tests/setup.js'],
  automock: false,
  modulePaths: ['<rootDir>'],
