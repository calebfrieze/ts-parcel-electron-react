import { app, BrowserWindow } from 'electron';
import path from "path";

var mainWindow: BrowserWindow | null;

const { env: { NODE_ENV }, platform } = process;

const PRODUCTION = NODE_ENV === "production";

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  if (!PRODUCTION) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
