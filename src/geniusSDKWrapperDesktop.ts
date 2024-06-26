import koffi from 'koffi';
import path from 'path';

let libraryPath: string;
switch (process.platform) {
  case 'win32':
    libraryPath = path.resolve(__dirname, '../../GeniusSDK.dll');
    break;
  case 'darwin':
    libraryPath = path.resolve(__dirname, 'GeniusSDK.dylib');
    break;
  case 'linux':
    libraryPath = path.resolve(__dirname, 'GeniusSDK.so');
    break;
  default:
    throw new Error(`Unsupported platform: ${process.platform}`);
}

const GeniusSDK = koffi.load(libraryPath);

const GeniusSDKInit = GeniusSDK.func('void GeniusSDKInit()');
const GeniusSDKProcess = GeniusSDK.func('void GeniusSDKProcess(const char*, unsigned long long)');

export const initGnus = GeniusSDKInit;
export const processGnus = GeniusSDKProcess;