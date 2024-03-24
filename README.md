# Rocket App 

This is a simple app to track SpaceX launches. 
SpaceX public api is used to fetch launch data via axios, which is then rendered in a performant SectionList, and react-navigation allows 
the user to click a launch card and in order to view its details and video. 
To prevent having to scroll all the way back up, there is a nifty "scroll to top" button that floats on the bottom right, which is online visible when the user has scrolled down a predefined length. 

The launches are separated into upcoming and past launches, and sorted smartly by date. 
An intuitive color code was used to determine the launch's success, or lack thereof. Red background is reserved for failed launches whereas 
green is for success. Upcoming launches are colored in grey. 

Two placeholder images are served from /assets folder to populate the launch image when there is none served via api. Small one is for the 
list and the large for the detail. Furthermore, FastImage was used to cache images so unnecessary renders and fetches aren't made. 

Due to the simplicity of the app and the data, there is no need to use a state management library such as redux, or mobx. 

Logic in view has mostly been moved to custom hooks. Utility functions are well tested. Some constants are defined to avoid repetition. 

There are small "senior" tricks such as conditional number of lines for launch details and failure reason strings in list cards. One can take the whole 4 lines (and get concetaned with ellipses) when there is no need to render the other. Otherwise they both take up 2 number of lines. 

Launch video is served via Webview with Youtube link found in the api response. 

An improvement would be to implement a push notification service for upcoming launches, and a "Live Launch Countdown" page that displays the youtube view, with its live chat. But I could find no such free service. 

Text and styles don't have the best design, but that's an improvement which would take thinking and more time. 

### The projet structure is as follows: 

```
__tests__/
__mocks__/
/src
  /components
  /screens
  /services
  /assets
  /hooks
  /utils
  /navigation
  App.tsx
  constants.ts
```

### Quality of Life Improvements 

The package.json file includes scripts to lint, format, typecheck the project, and run unit tests. 

## Screenshots

### Android

![Screenshot_20240324_160949](https://github.com/Babazon/rocket-launch/assets/9430138/a07e079e-664c-49f1-b98d-74c61607322c)
![Screenshot_20240324_161047](https://github.com/Babazon/rocket-launch/assets/9430138/431a53f4-4420-4a66-8533-3a28859b9d4d)

### IOS

![simulator_screenshot_0083A262-BD0F-403C-9E0E-B3FBB4FBC897](https://github.com/Babazon/rocket-launch/assets/9430138/2055a94b-0ed5-4ffb-be1d-87f58aa899fc)
![simulator_screenshot_B9D8324D-DDA9-4977-BBAF-C4B13B8532F2](https://github.com/Babazon/rocket-launch/assets/9430138/24d9c3d3-82f2-46ab-b561-9b677cca22f6)
![simulator_screenshot_16323FCA-F9DB-4B0B-8EDA-88D3ED0CE2C9](https://github.com/Babazon/rocket-launch/assets/9430138/056b6a53-6c07-463a-a2ba-ce82502f0f27)
![simulator_screenshot_D7989D04-C55A-4D1B-8DB1-F6DE09379F7E](https://github.com/Babazon/rocket-launch/assets/9430138/b2d33256-d887-44b7-b1f8-7e68d2938657)
![simulator_screenshot_6DD0B5C8-F923-4C47-9CA5-A6CEC5535472](https://github.com/Babazon/rocket-launch/assets/9430138/6a94903b-3205-46d5-84e4-01cb7404e5f2)


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
