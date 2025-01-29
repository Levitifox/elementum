const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require("os");

let mainWindow;
const notesDir = path.join(os.homedir(), "Documents", "MarkdownNotes");

if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
}

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

ipcMain.handle("load-notes", () => {
    const files = fs.readdirSync(notesDir);
    return files.map((file) => ({
        id: file.replace(".md", ""),
        text: fs.readFileSync(path.join(notesDir, file), "utf8"),
    }));
});

ipcMain.on("save-note", (event, { id, text }) => {
    const filePath = path.join(notesDir, `${id}.md`);
    fs.writeFileSync(filePath, text, "utf8");
});

ipcMain.on("delete-note", (event, id) => {
    const filePath = path.join(notesDir, `${id}.md`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});
