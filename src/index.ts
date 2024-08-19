import { Platform } from "./utils/platform";
import { NativeModules } from "react-native";

export const initGnus = (): void => {
  console.log("Initializing SDK...");

  const platform = Platform.getPlatform();
  console.log(`Running on platform: ${platform}`);

  if (platform === "Android") {
    const { MyNativeModule } = NativeModules;
    if (MyNativeModule) {
      MyNativeModule.getNativeStringFromSo((result: string) => {
        console.log(`Native string from .so file: ${result}`);
      });
    }
  } else if (platform === "iOS") {
    // iOS-specific initialization code goes here
  }
};
