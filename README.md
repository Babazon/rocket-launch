# Rocket Launch Tracker
Rocket Launch Tracker is a user-friendly mobile application designed to keep users updated on SpaceX launches. Leveraging the SpaceX public API, the app provides real-time information about upcoming and past launches. Users can conveniently navigate through launches, view launch details, and watch launch videos with ease.


1. [Rocket Launch Tracker](#rocket-launch-tracker)
2. [Key Features](#key-features)
   - [Launch Tracking](#launch-tracking)
   - [Intuitive Interface](#intuitive-interface)
   - [Launch Status Visualization](#launch-status-visualization)
   - [Image Handling](#image-handling)
   - [Optimized Performance](#optimized-performance)
   - [Webview Integration](#webview-integration)
3. [Project Structure](#project-structure)
4. [Quality of Life Improvements](#quality-of-life-improvements)
5. [Future Improvements](#future-improvements)
6. [Screenshots](#screenshots)
   - [Android](#android)
   - [iOS](#ios)
7. [Installing and running the app](#getting-started)
   - [Step 1: Start the Metro Server](#step-1-start-the-metro-server)
   - [Step 2: Start your Application](#step-2-start-your-application)
      - [For Android](#for-android)
      - [For iOS](#for-ios)
   - [Step 3: Modifying your App](#step-3-modifying-your-app)
8. [Congratulations!](#congratulations)
   - [Now what?](#now-what)
9. [Troubleshooting](#troubleshooting)
10. [Learn More](#learn-more)


## Key Features

### Launch Tracking: 
Utilizes the SpaceX public API to fetch launch data and presents it in an organized manner.
### Intuitive Interface: 
Features a performant SectionList for efficient navigation and a "scroll to top" button for seamless user experience.
### Launch Status Visualization: 
Employs a color-coded system to visually represent the success or failure of launches, enhancing user comprehension.
### Image Handling: 
Provides placeholder images from the assets folder to ensure a consistent user interface and utilizes FastImage for efficient image caching.
### Optimized Performance: 
Implements custom hooks to streamline logic in views and thoroughly tests utility functions for reliability. Make use of memoised variables and functions throughout the SectionList in order to optimise re-rendering cost. 
### Webview Integration: 
Seamlessly integrates launch videos via Webview using YouTube links obtained from the API responses.

## Project Structure
The project follows a structured layout for easy navigation and maintenance. Folders such as state, translations, context, (or containers, molecules..) can be added when the project gets larger. 

```
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
__tests__
__mocks__
```

## Quality of Life Improvements
The package.json file includes scripts for linting, formatting, type-checking, and running unit tests, promoting code quality and maintainability.  
`$ npm run check-types`
`$ npm run lint-fix`
`$ npm run test`
`$ npm run format`

## Future Improvements
While the current version offers essential functionality, potential future enhancements include implementing push notification services for upcoming launches and introducing a "Live Launch Countdown" feature displaying live YouTube streams with integrated chat functionality. Had SpaceX api offered paging, or graphql, smaller requests could be made on home screen which would ease the burden on the network usage and calculation costs on the device. Finally, a real designer could design a futuriistic, atom-age style design that provides a real ROCKET APP feeling. 

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
