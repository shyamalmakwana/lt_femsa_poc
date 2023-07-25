/*const wd = require("wd")

const username = process.env.LT_USERNAME || "christian.lundstedt";
const accessKey = process.env.LT_ACCESS_KEY || "L7svD5dYdXAWeLxBgHQfcoOZU8ZASOJS2Y7Ij5cWY9hRslog6u"

const driver = wd.promiseRemote(
    `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`
)*/

Feature('login');

Scenario('test basic login',  ({ I }) => {
    I.waitForElement('~Login')
    I.tap('~Login')
    I.waitForElement('~input-email')
    I.fillField('~input-email', 'mail@example.com')
    I.fillField('~input-password', 'password')
    I.tap('~button-LOGIN')
})
