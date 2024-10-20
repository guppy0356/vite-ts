import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "node",
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
};

export default config;
