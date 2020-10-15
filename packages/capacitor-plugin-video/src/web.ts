import { WebPlugin } from '@capacitor/core';
import { CapacitorVideoPluginPlugin } from './definitions';

export class CapacitorVideoPluginWeb extends WebPlugin implements CapacitorVideoPluginPlugin {
  constructor() {
    super({
      name: 'CapacitorVideoPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorVideoPlugin = new CapacitorVideoPluginWeb();

export { CapacitorVideoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorVideoPlugin);
