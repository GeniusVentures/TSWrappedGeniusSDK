#include <napi.h>
#include "GeniusSDK.h"
#include "TransactionBlocks.h"

Napi::Value GetSeed(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    if (info.Length() < 2)
    {
        Napi::TypeError::New(env, "Expected two arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsArray() || !info[1].IsString())
    {
        Napi::TypeError::New(env, "Expected arguments are (Array, String)").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::vector<std::string> mnemonic;
    Napi::Array mnemonicArray = info[0].As<Napi::Array>();

    for (size_t i = 0; i < mnemonicArray.Length(); ++i)
    {
        mnemonic.push_back(mnemonicArray.Get(i).As<Napi::String>().Utf8Value());
    }

    std::string passphrase = info[1].As<Napi::String>().Utf8Value();
    std::string seed;

    int result = sgns::GeniusSDK::GetSeed(mnemonic, passphrase, seed);

    if (result != 0)
    {
        Napi::Error::New(env, "Failed to generate seed").ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::String::New(env, seed);
}

Napi::Value GetPublicKey(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    if (info.Length() < 2)
    {
        Napi::TypeError::New(env, "Expected two arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsArray() || !info[1].IsString())
    {
        Napi::TypeError::New(env, "Expected arguments are (Array, String)").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::vector<std::string> mnemonic;
    Napi::Array mnemonicArray = info[0].As<Napi::Array>();

    for (size_t i = 0; i < mnemonicArray.Length(); ++i)
    {
        mnemonic.push_back(mnemonicArray.Get(i).As<Napi::String>().Utf8Value());
    }

    std::string passphrase = info[1].As<Napi::String>().Utf8Value();
    std::string publicKey;

    int result = sgns::GeniusSDK::GetPublicKey(mnemonic, passphrase, publicKey);

    if (result != 0)
    {
        Napi::Error::New(env, "Failed to generate public key").ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::String::New(env, publicKey);
}

Napi::Value GetPrivateKey(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    if (info.Length() < 2)
    {
        Napi::TypeError::New(env, "Expected two arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsArray() || !info[1].IsString())
    {
        Napi::TypeError::New(env, "Expected arguments are (Array, String)").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::vector<std::string> mnemonic;
    Napi::Array mnemonicArray = info[0].As<Napi::Array>();

    for (size_t i = 0; i < mnemonicArray.Length(); ++i)
    {
        mnemonic.push_back(mnemonicArray.Get(i).As<Napi::String>().Utf8Value());
    }

    std::string passphrase = info[1].As<Napi::String>().Utf8Value();
    std::string privateKey;

    int result = sgns::GeniusSDK::GetPrivateKey(mnemonic, passphrase, privateKey);

    if (result != 0)
    {
        Napi::Error::New(env, "Failed to generate private key").ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::String::New(env, privateKey);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "getSeed"), Napi::Function::New(env, GetSeed));
    exports.Set(Napi::String::New(env, "getPublicKey"), Napi::Function::New(env, GetPublicKey));
    exports.Set(Napi::String::New(env, "getPrivateKey"), Napi::Function::New(env, GetPrivateKey));
    return exports;
}

NODE_API_MODULE(genius_sdk, Init)
