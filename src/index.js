const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {

  const win = new BrowserWindow({
    width: 700,
    height: 700,
    icon: path.join(__dirname, 'icon.png'),
    resizable: false,
    frame: false,
  })

  win.setMenuBarVisibility(false);
  win.setTitle('dotaCD');
  win.loadFile('src/index.html');


}

app.whenReady().then(() => createWindow())
app.on('window-all-closed', () => app.quit())