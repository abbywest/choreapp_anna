const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    mainWindow.loadFile('choreindex_anna.html')
}

app.whenReady().then(() => {
    createWindow()

    // Enable remote module
    require('@electron/remote/main').initialize()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
