import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { initGnus, processGnus } from '../src/geniusSDKWrapper';  // Import from the source

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'), // Adjusted path
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '../index.html'), // Adjusted path
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function initApp() {
  createWindow();
  initGnus();
}

app.on('ready', initApp);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('before-quit', () => {
  console.log('Performing cleanup...');
});
