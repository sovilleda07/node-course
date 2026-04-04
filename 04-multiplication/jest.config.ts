import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          module: 'esnext', // 👈 Clave: reemplaza nodenext por esnext
          moduleResolution: 'bundler', // 👈 Necesario con esnext
        },
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
