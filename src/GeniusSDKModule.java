package com.myproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class GeniusSDKModule extends ReactContextBaseJavaModule {

  static {
    System.loadLibrary("GeniusSDK");
  }

  public native void GeniusSDKInit();
  public native void GeniusSDKProcess(String path, long amount);

  GeniusSDKModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "GeniusSDKModule";
  }

  @ReactMethod
  public void initGnus() {
    GeniusSDKInit();
  }

  @ReactMethod
  public void processGnus(String path, long amount) {
    GeniusSDKProcess(path, amount);
  }
}
