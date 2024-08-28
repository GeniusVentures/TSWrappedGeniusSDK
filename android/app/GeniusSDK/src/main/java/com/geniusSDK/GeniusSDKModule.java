package com.GeniusSDK;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class GeniusSDKModule extends ReactContextBaseJavaModule {

    static {
        System.loadLibrary("GeniusSDK"); // Load the native library
    }

    public GeniusSDKModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GeniusSDKModule"; // This name is used to access the module from JavaScript
    }

    @ReactMethod
    public void GeniusSDKInit(Callback callback) {
        callback.invoke("GeniusSDKModule Initialized"); // Return the initialization string to JavaScript
    }
}
