// Preload script for secure context bridge
// Exposes safe APIs to the renderer process if needed in the future

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('desktopApp', {
  platform: process.platform,
  isDesktop: true
});
