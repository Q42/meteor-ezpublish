meteor-ezpublish
================

publish a collection once and let subscibers determine the details

example:

	// publish the (entire) Entries collection on the server
	ezPublish(Entries, { fields: {
	    comment: 0,
    	log: 0
	}});


	// pass a filter when subscribing on the client
	Meteor.subscribe('ez_entries', {
	  project: { $in: ['apps', 'services'] },
	});
