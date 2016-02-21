import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  
  label: null,
  
  dropdownItems: null,

  showDropdown: false,

  actions: {
  	toggleDropdown: function() {
  		this.toggleProperty('showDropdown');
  	}
  }
});
