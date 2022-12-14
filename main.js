const { app, BrowserWindow, dialog } = require("electron");
const {autoUpdater} = require("electron-updater");
const path = require("path");
let bw = null; // A ref should be kept so the window will not be garbage collected

app.once("ready", () => {
    bw = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    bw.loadFile(path.join(__dirname, "index.html"));
    bw.webContents.toggleDevTools(); // New!

    autoUpdater.checkForUpdatesAndNotify()
        .then(() => console.log('Checked for updates'))
        .catch((e) => console.log(e));
});

app.on("window-all-closed", () => app.quit());