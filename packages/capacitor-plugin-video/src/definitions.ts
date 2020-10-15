declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorVideoPlugin: CapacitorVideoPluginPlugin;
  }
}

export interface CapacitorVideoPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
