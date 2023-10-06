const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 800
    })
  
    win.loadFile('index.html')
    
    // open dev tools
    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    createWindow()
  })