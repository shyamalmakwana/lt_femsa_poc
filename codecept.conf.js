const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: "https://webhook.site/893da154-b563-4dd9-bfda-f1dacbbc8d68",
      port: 4444,
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      app: "lt://APP10160631101690289414695666",
      desiredCapabilities: {
        platformName: "android",
        app: "lt://APP10160631101690289414695666",
        deviceName: "Pixel 6",
        platformVersion: "12",
        isRealMobile: true,
        //appPackage: 'com.wdiodemoapp',
        //appActivity: 'com.wdiodemoapp.SplashActivity',
        //automationName: 'UiAutomator2'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptIntroSP'
} 