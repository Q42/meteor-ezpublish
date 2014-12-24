meteor-ezpublish
================

Publish a collection once and let subscribers determine the details

Example:

	// publish the entire Entries collection on the server; no defaults given
	ezPublish(Entries);

	// pass a filter when subscribing on the client
	Meteor.subscribe(
		'ez_entries', 
		{ project: { $in: ['apps', 'services'] } },
		{ fields: { comment: 0 } }
	);


Example 2:

	// pass the defaults to the publication
	ezPublish(
		Entries, 
		{ project: { $in: ['apps', 'services'] } }, 
		{ fields: { comment: 0 } }
	);

	// pass a filter when subscribing on the client
	Meteor.subscribe('ez_entries');

	// optionally overwrite the defaults
	Meteor.subscribe(
		'ez_entries',
		{ project: { $in: ['games', 'publications'] } }, 
		{ fields: { comment: 0, description: 0 } }
	);

	// return everything from the publication
	Meteor.subscribe(
		'ez_entries',
		{ }, 
		{ fields: { } }
	);
