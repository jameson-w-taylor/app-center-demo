import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-center-demo',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      APP_SECRET: 'app-secret-goes-here',
      APPCENTER_ANALYTICS_ENABLE_IN_JS: 'true',
      APPCENTER_CRASHES_ALWAYS_SEND: 'true'
    }
  }
};

export default config;
