import { Platform } from "./utils/platform";

export const initializeSDK = (): void => {
  console.log("Initializing SDK...");

  const platform = Platform.getPlatform();
  console.log(`Running on platform: ${platform}`);
};
