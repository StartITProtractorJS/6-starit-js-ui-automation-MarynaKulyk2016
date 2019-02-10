process.env.TS_NODE_FILES = true;
require('ts-node').register();

exports.config = {
    specs: [
        './tests/**/*.ts'
    ],
    port: '9515',
    path: '/',
    services: ['chromedriver'],
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    baseUrl: 'http://ip-5236.sunline.net.ua:38015',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    waitforTimeout: 1000,
    before: function() {
        browser.url('/');
    }
};


