const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require("os");

let mainWindow;
const notesDir = app.isPackaged
    ? path.join(app.getPath("documents"), "MarkdownNotes")
    : path.join(os.homedir(), "Documents", "MarkdownNotes");

if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
            preload: path.join(app.getAppPath(), "preload.js"),
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

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.handle("load-notes", async () => {
    const files = await fs.promises.readdir(notesDir);
    return Promise.all(files.map(async (file) => ({
        id: file.replace(".md", ""),
        text: await fs.promises.readFile(path.join(notesDir, file), "utf8"),
    })));
});

ipcMain.on("save-note", async (event, { id, text }) => {
    const filePath = path.join(notesDir, `${id}.md`);
    await fs.promises.writeFile(filePath, text, "utf8");
});

ipcMain.on("delete-note", (event, id) => {
    const filePath = path.join(notesDir, `${id}.md`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
});
