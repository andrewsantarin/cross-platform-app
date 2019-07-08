# cross-platform-app

An example app boilerplate for Web + desktop + mobile using React.js + React-Native as its core presentation layer.


- [Installation](#Installation)
  - [Tools](#Tools)
    - [Optional Tools](#Optional-Tools)
  - [Setup](#Setup)
  - [Quick Start](#Quick-Start)
- [Available scripts](#Available-scripts)
  - [Web](#Web)
  - [Desktop](#Desktop)
  - [Mobile](#Mobile)
  - [Linting](#Linting)
- [So, the "Why?" of all this.](#So-the-%22Why%22-of-all-this)
  - [Additional Reading](#Additional-Reading)


## Installation

### Tools
You'll need the latest versions of these tools installed in order to continue:
- [Node](https://node.js.org/)
- [Yarn](https://yarnpkg.com)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/#installation)
  
  You can also choose to install the Expo CLI later, but it is still necessary for the mobile instance to run. When you run the mobile instance listed on [Quick Start](#Quick-Start), you will be prompted to run `npm install --global expo-cli` prior to running the instance. Let the installation run. Expo will handle of the process for you.

#### Optional Tools
When debugging on mobile, it is possible that you would consider resorting to emulators. Additional instructions on [Expo's official website](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/). You'll need the latest versions of:
- Xcode (which includes the iOS simulator)
- Android Studio's built-in emulator

If you don't have these tools, you can always test the app on a real device using the Expo client.

### Setup

```
git clone https://github.com/andrewsantarin/cross-platform-app.git
cd cross-platform-app
yarn
```

### Quick Start

Simply put...

- Web instance:
  
```sh
yarn web-start
```

- Desktop instance:

```sh
# If you haven't run "web-start"
yarn desktop-web-start

# If you have run "web-start" or want to run both processes independently (e.g. for debugging),
# then run these on two separate terminals:
yarn web-start # Ignore this if you've already got "web-start" running!
yarn desktop-start
```

- Mobile instance:

```sh
yarn mobile-start
```


## Available scripts

### Web
- Generated with the [`create-react-app`](https://github.com/facebook/create-react-app) boilerplate.
- Runs using the `react-scripts` package at v3.0.1.
- Additional references to what each command does is available in [the local Create React App readme](./CREATE-REACT-APP-README.md).
- All React files specifically for web are denoted with the `.web.tsx` extension.

| Script      | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `web-start` | Starts the web app at [http://localhost:3000](http://localhost:3000)                        |
| `web-test`  | Tests the code and observes it for any changes.                                             |
| `web-build` | Outputs minified, deployable code to the `/build` folder.                                   |
| `web-eject` | Decompiles the `create-react-app` configuration for finer tuning purposes. Not recommended. |

### Desktop
- Generated with the [`electron-quick-start`](https://github.com/electron/electron-quick-start) boilerplate.
- Runs using the `electron` framework at v5.0.6.
- Additional documentation is available on [the official Electron website](https://electronjs.org/).
- Electron usually points to the `main` field in [`package.json`](./package.json) for an entry point. However, this conflicts with the [Mobile](#Mobile) setup. Therefore, an inline reference to `src/index.desktop.js` has been provided.

| Script                        | Description                                                                                                                                                                              |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `desktop-start`             | Starts the Electron client. You need to also run Web independently with `web-start` for the actual content. If you ran `desktop-start` first, reload the view to see the content.          |
| `desktop-build`             | Outputs desktop code into archive files and binary installers. See [electron.builder](https://www.electron.build/) for details. You need to build the Web content using `web-build` first! |
| `desktop-web-build`         | Outputs the Web build and desktop archive files and binary installers in one shot.                                                                                                         |
| `desktop-web-build-release` | Same as `desktop-web-build`, but with publishing set up. See [the `electron-builder` documentation](https://www.electron.build/configuration/publish) for details.                         |
| `desktop-web-start`         | Starts the Electron client and Web app in one terminal. Alternatively, run `web-start` and `desktop-start` independently.                                                                  |


### Mobile
- Generated with the [`expo-cli`](https://docs.expo.io/versions/latest/workflow/expo-cli) boilerplate.
- Runs using the `expo` client at SDK33.
- Additional documentation is available on [the official Expo website](https://expo.io/).
- With the latest Expo settings, the `main` field in [`package.json`](./package.json) originally pointed to `node_modules/expo/AppEntry.js` for an entry point, but for consistency with Create React App, it now points to `src/index.mobile.js` using code cloned from the original path.

| Script                 | Description                                                                                                |
|------------------------|------------------------------------------------------------------------------------------------------------|
| `mobile-start`         | Starts the Expo server at [http://localhost:19001](http://localhost:3000).                                 |
| `mobile-start-android` | Starts the Expo server, connecting to Android simulator                                                    |
| `mobile-start-ios`     | Starts the Expo server, connecting to iOS simulator                                                        |
| `mobile-start-web`     | Starts the Expo server, presenting the Web content. Similar to `web-start` (the recommended script).       |
| `mobile-eject`         | Decompiles Expo into React-Native with Android + iOS parts which can be used if native modules are needed. |


### Linting
The source code for the app content is written in [TypeScript](https://typescriptlang.org), a powerful static type checker for JavaScript. Included with this source code are some style rules in [`tsconfig.json`](./tsconfig.json) for keeping good code standards (the linter is [TSLint](https://github.com/palantir/tslint)).

You can run the linter at will:

```
yarn lint
```

Visual Studio Code also integrates with the linter when you open a file, so you don't have to run the linter by terminal command.


## So, the "Why?" of all this.
Consider this a personal objective.

This is a case study where I find out how I could develop a cross-platform application. It so happens that at work, one of the assigned goals to me is to determine the most convenient way to get an app running on almost anything. So, I set off to try something. And I came up with this.

Bear in mind: there are other ways to accomplish that goal, that's for sure. The attempt I've tried here is not even the first of its kind! But, since I have varying levels of familiarity with `react`, the [`create-react-app`](https://github.com/facebook/create-react-app) Web dev toolchain, the [`create-react-native-app`](https://github.com/react-community/create-react-native-app) native dev toolchain (before it was renamed to [`expo-cli`](https://expo.io)) and very recently, the `electron` desktop framework, I concluded that perhaps this set of tools is worth looking into. The repo you see right now is the setup I am most comfortable with at this time of writing.

The majority of the **logical** part of the source code (henceforth assumed to be always written in TypeScript or JavaScript in the [`src`](./src) folder, unless, perhaps, Expo suddenly, you know, declares widespread support for native code in Java, Objective-C and Swift...) is expected to be able to run on **any platform** of my choosing, with only the presentation files (read: **the JSX components**) making the huge difference (since desktop and mobile could have very different needs, e.g. desktop users need a feature-complete dashboard view, while mobile users only require a condensed slice of it). Concepts such as local state management, global state management, side-effects, service singletons, utility helpers, data storage, form validation and client-side business logic should need not be specific to any platform, what with React Hooks, Redux, Redux-Saga, Promises, Socket.IO, Axios, localForage and the like being so available with the vast amounts of interplatform community support they already have. They should be accessible to just about any file possible and should serve as the core of the application.

In other words: build around the logic, not the presentation.

### Additional Reading
- https://medium.com/@impaachu/how-to-build-a-react-based-electron-app-d0f27413f17f

  Getting the Electron instance up and running in the easiest way possible.
  

- https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0
  
  Basically an update of this article, replacing Create React Native App with Expo CLI. The instructions are somewhat outdated, but the core idea remains.
