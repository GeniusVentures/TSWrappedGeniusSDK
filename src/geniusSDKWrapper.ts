let initGnus: () => void;
let processGnus: (path: string, amount: number) => void;

const { initGnus: desktopInitGnus, processGnus: desktopProcessGnus } = require('./geniusSDKWrapperDesktop');
initGnus = desktopInitGnus;
processGnus = desktopProcessGnus;

export { initGnus, processGnus };
