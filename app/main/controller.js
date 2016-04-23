import Ember from 'ember';

export default Ember.Controller.extend({
  address: ``,
  lat: ``,
  lng: ``,
  zoom: 12,

  search(value) {
    this.incrementProperty(`zoom`, 1);
    this.set(`address`, value);
  },

  getLocation() {
    this.set(`lat`, ``);
    this.set(`lng`, ``);

    navigator.geolocation.getCurrentPosition((location) => {
      this.set(`lat`, location.coords.latitude);
      this.set(`lng`, location.coords.longitude);
    });
  },

  getData() {
    fetch(`http://22c6fc86.ngrok.io/parking-spots`)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      this.data = data;
    });
  },

  actions: {
    onLocationChangeHandler(lat, lng, results) {
      Ember.Logger.log(`lat: ${lat}, lng: ${lng}`);
      Ember.Logger.debug(results);
    },
  },
});
