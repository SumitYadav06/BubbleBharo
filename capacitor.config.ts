import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bubblebharo.shooter',
  appName: 'BubbleBharo',
  webDir: 'www',
  backgroundColor: '#E8F6FF',
  android: {
    allowMixedContent: true,
  },
};

export default config;
