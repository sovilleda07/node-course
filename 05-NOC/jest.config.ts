import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  setupFiles: [
    "<rootDir>/setupTests.ts"
  ],
  testEnvironment: 'jest-environment-node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          module: 'esnext',
          moduleResolution: 'bundler',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

export default config;
