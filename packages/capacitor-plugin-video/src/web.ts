import { WebPlugin } from '@capacitor/core';
import { CapacitorVideoPluginPlugin } from './definitions';

export class CapacitorVideoPluginWeb extends WebPlugin implements CapacitorVideoPluginPlugin {
  constructor() {
    super({
      name: 'CapacitorVideoPlugin',
      platforms: ['web'],
    });
  }

  async selectVideo(_options: {}): Promise<{ path: string }> {
    throw new Error("Not implemented");
  }
}

const CapacitorVideoPlugin = new CapacitorVideoPluginWeb();

export { CapacitorVideoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorVideoPlugin);
