import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter.google.ios.oauth4',
  appName: 'google-sign',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1033776636998-75kd9mc9aebnmq0rknbak1943fk1sdoj.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};
//GoogleService-Info.plist


export default config;
