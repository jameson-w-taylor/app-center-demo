# Example Application using App Center Crashes+Analytics

## Microsoft Documentation
Refer to the Cordova instructions:
  - [Getting Started](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/cordova)
  - [Crashes](https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova)
  - [Analytics](https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova)

Quick Summary:

1. Create a blank Ionic+Capacitor application

2. Install plugins (I found `cordova-plugin-appcenter-shared` was also needed)
```bash
npm install cordova-plugin-appcenter-crashes cordova-plugin-appcenter-analytics cordova-plugin-appcenter-shared
```

3. Install `awesome-cordova-plugins` wrappers (formerly known as [Ionic Native](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/))
```bash
npm install @awesome-cordova-plugins/core @awesome-cordova-plugins/app-center-crashes @awesome-cordova-plugins/app-center-analytics
```

4. Using the [cordova instructions](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/cordova) as a guide, instead follow the Capacitor pattern to [register](https://capacitorjs.com/docs/cordova/migrating-from-cordova-to-capacitor#cordova-plugin-preferences) the plugin preference:
```typescript
// capacitor.config.ts

const config: CapacitorConfig = {
  //...other settings,
  cordova: {
    preferences: {
      APP_SECRET: 'app-secret-goes-here',
      APPCENTER_ANALYTICS_ENABLE_IN_JS: 'true',
      APPCENTER_CRASHES_ALWAYS_SEND: 'true'
    }
  }
};
```

4. Refer to Microsoft docs for API, and use `home.module.ts` and `home.page.ts` here to see angular example.

5. Run the following commands to build the web assets, add and sync the iOS platform, and open xcode to deply to your iOS device:
```bash
ionic build
ionic capacitor add ios
ionic capacitor sync ios
ionic capacitor open ios
```

6. Deploy the app to your device, and use Safari to connect to the app so you can view the `console.log()` output.