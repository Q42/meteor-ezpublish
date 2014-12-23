meteor-ezpublish
================

Publish a collection once and let subscribers determine the details

Example:

	// publish the (entire) Entries collection on the server
	ezPublish(Entries, { fields: {
	    comment: 0,
    	log: 0
	}});


	// pass a filter when subscribing on the client
	Meteor.subscribe('ez_entries', {
	  project: { $in: ['apps', 'services'] },
	});
