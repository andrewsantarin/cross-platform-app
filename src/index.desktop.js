const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let browserWindow;

function destroyBrowserWindow() {
  browserWindow = null;
}

function createBrowserWindow() {
  browserWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nativeWindowOpen: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegration: true,
    },
  });

  browserWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, './build/index.html')}`
  );

  browserWindow.on('closed', destroyBrowserWindow);
}

function quitApp() {
  if (process.platform === 'darwin') {
    return;
  }

  app.quit();
}

function startApp() {
  if (browserWindow !== null) {
    return;
  }

  createBrowserWindow();
}

app.on('ready', createBrowserWindow);
app.on('activate', startApp);
app.on('browserWindow-all-closed', quitApp);
