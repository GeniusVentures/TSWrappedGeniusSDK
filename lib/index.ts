import * as path from "path";
// import * as ffi from "ffi-napi";

const addonPath = path.join(
  __dirname,
  "..",
  "build",
  "Release",
  "genius_sdk.node"
);
const geniusSdk = require(addonPath);

export function getSeed(mnemonic: string[], passphrase: string): string {
  return geniusSdk.getSeed(mnemonic, passphrase);
}

export function getPublicKey(mnemonic: string[], passphrase: string): string {
  return geniusSdk.getPublicKey(mnemonic, passphrase);
}

export function getPrivateKey(mnemonic: string[], passphrase: string): string {
  return geniusSdk.getPrivateKey(mnemonic, passphrase);
}
