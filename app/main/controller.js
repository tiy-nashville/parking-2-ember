import Ember from 'ember';

export default Ember.Controller.extend({
  addresses: [],
  lat: 36.1627,
  lng: -86.7816,

  search(address) {
    this.set(`addresses`, [...this.addresses, address]);
    this.set(`address`, ``);
  },
});
