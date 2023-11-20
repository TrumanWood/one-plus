const { app, BrowserWindow } = require('electron')
const path = require('path')
const WinState  = require('electron-win-state').default

const createWindow = () => {
    const winState = new WinState({
        defaultWidth: 1000,
        defaultHeight: 800
    })
    //   width: 1000,
    //   height: 800
    const win = new BrowserWindow({
        // 自定义窗口状态
        ...winState.winOptions,
        webPreferences: {
            // Electron的 Unable to load preload script 报错解决方案
            // 开启沙盒则preload脚本被禁用，所以得设为false
            sandbox: false, 
            // 定义预加载的js
            preload: path.resolve(__dirname, './preload')
        }
    })
  
    win.loadURL('http://localhost:5173')
    
    // open dev tools
    win.webContents.openDevTools();
    winState.manage(win)
  }

  // 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
  app.whenReady().then(() => {
    createWindow();
    
    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    // 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
    // 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
    // 直到用户使用 Cmd + Q 明确退出
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
  })