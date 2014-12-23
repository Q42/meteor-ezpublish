ezPublish = function ezPublish(collection, defaults) {
  'use strict';

  Meteor.publish('ez_' + collection._name, function(selector, options) {
    if (!this.userId) throw new Error('anonymous subscription not allowed');
    console.log('ddp ez_' + collection._name + ' subscribed by ' + this.userId);

    selector = selector || {};
    console.log('   selector: ' + JSON.stringify(selector));

    options = options || {};
    options = _.pick(options, ['sort', 'skip', 'limit', 'fields']);
    options = _.extend({}, defaults, options);

    console.log('   options: ' + JSON.stringify(options));

    return collection.find(selector, options);
  });
}
