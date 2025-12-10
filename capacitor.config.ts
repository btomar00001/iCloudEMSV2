import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.icloudems.v2.clone',
  appName: 'iCloudEMS V2',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;