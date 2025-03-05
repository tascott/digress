import { contextBridge } from 'electron'
import { ipcRenderer } from 'electron'

declare global {
  interface Window {
    App: typeof API
  }
}

const API = {
  sayHelloFromBridge: () => console.log('\nHello from bridgeAPI! 👋\n\n'),
  username: process.env.USER,
  chat: {
    send: (message: string) => ipcRenderer.invoke('chat:send', message)
  }
}

contextBridge.exposeInMainWorld('App', API)
