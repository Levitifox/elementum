const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadURL("http://localhost:3000");

    Menu.setApplicationMenu(null);

    if (process.env.NODE_ENV === "development") {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});
