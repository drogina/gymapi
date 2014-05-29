

angular.module('gymternetApp.services', [])
	// Gymnasts Service
	.factory('Gymnasts', function($resource) {
		return $resource('/api/gymnasts',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST', isArray: true }
			});
	})
	// Meets Service
	.factory('Meets', function($resource) {
		return $resource('/api/meets',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST' }
			});
	})
	// Clubs Service
	.factory('Clubs', function($resource) {
		return $resource('/api/clubs',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST' }
			});
	})
	// Coaches Service
	.factory('Coaches', function($resource) {
		return $resource('/api/coaches',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST' }
			});
	})
	// Countries Service
	.factory('Countries', function($resource) {
		return $resource('/api/countries',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST' }
			});
	});