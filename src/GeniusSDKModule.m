#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(GeniusSDKModule, NSObject)

RCT_EXTERN_METHOD(initGnus)
RCT_EXTERN_METHOD(processGnus:(NSString *)path amount:(NSUInteger)amount)

@end
