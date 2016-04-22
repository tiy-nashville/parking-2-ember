import Ember from 'ember';

export default Ember.Controller.extend({
  addresses: [],

  search(address) {
    this.set(`addresses`, [...this.addresses, address]);
    this.set(`address`, ``);
  },
});
