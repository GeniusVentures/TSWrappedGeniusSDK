import { Platform } from "./utils/platform";
import { NativeModules } from "react-native";

export const initGnus = (): void => {
  console.log("Initializing SDK...");

  const platform = Platform.getPlatform();
  console.log(`Running on platform: ${platform}`);

  if (platform === "Android") {
    const { GeniusSDKModule } = NativeModules;
    console.log(GeniusSDKModule);
    if (GeniusSDKModule) {
      console.log("MyNativeModuleTrue");
      GeniusSDKModule.GeniusSDKInit((result: string) => {
        console.log(`Native string from .so file: ${result}`);
      });
    }
  } else if (platform === "iOS") {
    // iOS-specific initialization code goes here
  }
};
