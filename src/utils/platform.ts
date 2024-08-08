// src/utils/platform.ts

import { Platform as RNPlatform } from "react-native";

export class Platform {
  static getPlatform(): string {
    // Detect iOS or Android
    if (RNPlatform.OS === "ios") {
      return "iOS";
    } else if (RNPlatform.OS === "android") {
      return "Android";
    }

    // Fallback in case of an unknown platform
    return "Web";
  }
}
