declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorVideoPlugin: CapacitorVideoPluginPlugin;
  }
}

export interface CapacitorVideoPluginPlugin {
  selectVideo(options: {
    
  }): Promise<{
    path?: string;
  }>;
}
