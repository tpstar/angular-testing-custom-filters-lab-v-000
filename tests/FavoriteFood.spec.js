describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function() {
		var mockedList = [{
			name: 'Han',
			favoriteFood: 'pizza'
			}, {
			name: 'Jim',
			favoriteFood: 'hamburger'
			}, {
			name: 'Bill',
			favoriteFood: 'apple pie'
			}];
		var results = $filter('favoriteFood')(mockedList, 'pizza');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Han')
	})


});
