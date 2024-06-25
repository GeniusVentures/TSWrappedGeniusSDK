import { Platform, NativeModules } from 'react-native';
let initGnus: () => void;
let processGnus: (path: string, amount: number) => void;

if (Platform.OS === 'ios' || Platform.OS === 'android') {
  const { GeniusSDKModule } = NativeModules;
  initGnus = () => GeniusSDKModule.initGnus();
  processGnus = (path, amount) => GeniusSDKModule.processGnus(path, amount);
} else {
  const { initGnus: desktopInitGnus, processGnus: desktopProcessGnus } = require('./geniusSDKWrapperDesktop');
  initGnus = desktopInitGnus;
  processGnus = desktopProcessGnus;
}

export { initGnus, processGnus };
