ezPublish = function ezPublish(collection, defaultSelector, defaultOptions) {
  'use strict';

  Meteor.publish('ez_' + collection._name, function(selector, options) {
    if (!this.userId) {
      // the user is unknown now
      // but when Tracker sees that you're logged in, the subscribe will be re-evaluated
      return;
    }
    console.log('ddp ez_' + collection._name + ' subscribed by ' + this.userId);

    selector = selector || defaultSelector || {};
    console.log('   selector: ' + JSON.stringify(selector));

    options = options || {};
    options = _.pick(options, ['sort', 'skip', 'limit', 'fields']);
    options = _.extend({}, defaultOptions, options);

    console.log('   options: ' + JSON.stringify(options));

    return collection.find(selector, options);
  });
};
