# cross-platform-app

An example app boilerplate for Web + desktop + mobile using React.js + React-Native as its core presentation layer.


- [Installation](#Installation)
  - [Prerequisites](#Prerequisites)
  - [Setup](#Setup)
  - [Run](#Run)
- [Available scripts](#Available-scripts)
  - [Web](#Web)
  - [Desktop](#Desktop)
  - [Mobile](#Mobile)


## Installation

### Prerequisites
You'll need the latest versions of these tools installed in order to continue:
- [Node](https://node.js.org/)
- [Yarn](https://yarnpkg.com)
- [Git](https://git-scm.com/)

### Setup

```
git clone https://github.com/andrewsantarin/cross-platform-app.git
cd cross-platform-app
yarn
```

### Run

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
- Runs using the `electron` framework at 5.0.6.
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
