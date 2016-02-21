import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return {
			label: 'dropdown',
			items: [
				{name: 'confirm', label: 'Confirm', action: 'confirm'},
				{name: 'cancel', label: 'Cancel', action: 'cancel'},
				{name: 'test', label: 'Test', action: 'test'},
			]
		};
	}
});
