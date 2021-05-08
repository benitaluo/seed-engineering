/* SystemJS module definition */
declare var module: NodeModule;



interface Electron {
  ipcRenderer: IpcRenderer;
  remote: {
    getGlobal: (name: string) => any
  };
}

interface IpcRenderer {
  on(channel: string, listener: (event: any, ...args: any[]) => void): this;

  once(channel: string, listener: (event: any, ...args: any[]) => void): this;

  removeAllListeners(channel?: string): this;

  removeListener(channel: string, listener: any): this;

  send(channel: string, ...args: any[]): void;

  sendSync(channel: string, ...args: any[]): void;
}
