import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bubblebharo.shooter',
  appName: 'BubbleFodo',
  webDir: 'www',
  backgroundColor: '#E8F6FF',
  android: {
    allowMixedContent: true,
  },
};

export default config;
