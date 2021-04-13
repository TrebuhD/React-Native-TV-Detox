# Running Detox tests inside a React Native TV environment

Disclaimer: this example only works with Android TV at the moment. Apple tvOS instructions will be added once Detox/EarlGray supports it.

## Prerequisites

- You must have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed.

## Setup

1. Install dependencies by running `yarn install` in the project root. If on macOS, you can run:
   ```
   brew update && brew install node
   ```
   to install node and
   ```
   npm install --global yarn
   ```
   to install yarn.
2. Install detox command line tools: `npm install -g detox-cli`.
3. Install Android SDK tools and create a TV test device emulator in Android Studio. The instructions are in the [detox docs](https://github.com/wix/Detox/blob/master/docs/Introduction.AndroidDevEnv.md).

#### Important: The emulator device must be called `TestAndroidTV`. You can rename it at any time.

4. Verify that `adb` is in your PATH by running `adb devices` in the terminal. If you're getting `command not found`, install `adb` with `brew install android-platform-tools` (macOS).

## Running the app in normal mode (without tests)

1. Start your emulator in Android Studio. Make sure you don't have any other connected Android devices.
2. Run `yarn android` in the project root.
3. The app should start inside the emulator. You can navigate using the arrow keys on your keyboard.

## Building this project

Just run `yarn e2eBuildAndroid` to create a test build.

## Running the tests

For this step you need to create a test build first.

1. Run `yarn start` to start the React Native metro server (if it's not already running).
2. Run `yarn e2eTestAndroid` to start up the emulator and run the tests.
