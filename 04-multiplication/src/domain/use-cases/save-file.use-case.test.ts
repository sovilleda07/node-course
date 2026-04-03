import fs from 'fs';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';

import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {
  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs',
    fileName: 'custom-table-name',
  };
  const { fileDestination, fileName } = customOptions;

  const customFilePath = `${fileDestination}/${fileName}.txt`;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    // clean up the outputs directory before each test
    const outputFolderExists = fs.existsSync('outputs');
    if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

    const customFolderExists = fs.existsSync(customOptions.fileDestination);
    if (customFolderExists)
      fs.rmSync(customOptions.fileDestination, { recursive: true });
  });

  test('should save with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content',
    };

    const result = saveFile.execute(options);

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: 'utf-8',
    });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test('should save with custom values', () => {
    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);

    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('This is a custom error message from testing');
    });

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test('should return false if file could not be created', () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest
      .spyOn(fs, 'writeFileSync')
      .mockImplementation(() => {
        throw new Error('This is a custom writing error message from testing');
      });

    const result = saveFile.execute({ fileContent: 'Hola' });

    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });
});
