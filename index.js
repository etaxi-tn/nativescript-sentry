
const application = require('application');

exports.init = function (DSN) {
  if (application.android) {
    application.on(application.launchEvent, (event) => {
      const Raven = com.getsentry.raven.android.Raven;
      Raven.init(application.android.context);
    });
  } else if (application.ios) {
    application.on(application.launchEvent, (event) => {
      debug(event);
      let sentry = SentryClient.alloc().initWithDsnString(DSN);
      sentry.startCrashHandler();
      // SentryClient.prototype.shared = sentry;
      // SentryClient.shared.startCrashHandler();
    });
  }
};

