import koffi from 'koffi';

const dllPath = 'GeniusSDK.dll';

// Load the functions from the DLL
const GeniusSDK = koffi.load(dllPath);

// Define the functions
const GeniusSDKInit = GeniusSDK.func('void GeniusSDKInit()');
const GeniusSDKProcess = GeniusSDK.func('void GeniusSDKProcess(const char*, unsigned long long)');

export class GeniusSDKWrapper {
    private static instance: GeniusSDKWrapper;

    private constructor() {}

    public static getInstance(): GeniusSDKWrapper {
        if (!GeniusSDKWrapper.instance) {
            GeniusSDKWrapper.instance = new GeniusSDKWrapper();
        }
        return GeniusSDKWrapper.instance;
    }

    public initGnus(): void {
        console.log('Initialize Gnus SDK');
        GeniusSDKInit();
    }

    public processGnus(): void {
        const imagePath = "QmUDMvGQXbUKMsjmTzjf4ZuMx7tHx6Z4x8YH8RbwrgyGAf";
        GeniusSDKProcess(imagePath, 1);
    }
}