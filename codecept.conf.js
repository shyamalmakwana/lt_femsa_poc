const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { Options } = require('selenium-webdriver');
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',

  helpers: {
    Appium: {
      host: "mobile-hub.lambdatest.com",
      path: "/wd/hub/",
      port: 80,
      platform: "android",
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      desiredCapabilities: {         
          deviceName: "Galaxy.*",
          app: "lt://APP10160631101690377303988307",
          isRealMobile: true
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptIntroSP'
} 