'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  let width = require('electron').screen.getPrimaryDisplay().workAreaSize.width
  let height = require('electron').screen.getPrimaryDisplay().workAreaSize.height
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: height,
    width: width,
    frame: false,
    // fullscreen: true,
    fullscreenable: true,
    show: false,
    // resizable: false,
    backgroundColor: '#000',
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(winURL)

  mainWindow.once('ready-to-show', () => {
    mainWindow.isFullScreen()
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('min', () => mainWindow.minimize())

ipcMain.on('max', () => {
  if (mainWindow.isFullScreen()) {
    mainWindow.setFullScreen(false)
  } else {
    mainWindow.setFullScreen(true)
  }
})

ipcMain.on('close', () => mainWindow.close())
