import Ember from 'ember';

export default Ember.Controller.extend({
  address: ``,
  lat: 36.1627,
  lng: -86.7816,
  zoom: 12,

  search(value) {
    this.set(`zoom`, ``);
    const address = value;
    // &key=YOUR_API_KEY
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
    fetch(url)
    .then((results) => results.json())
    .then((data) => {
      const coords = data;
      this.set(`lat`, coords.results[0].geometry.location.lat);
      this.set(`lng`, coords.results[0].geometry.location.lng);
      this.set(`zoom`, 16);
    });
  },

  getLocation() {
    this.set(`zoom`, ``);
    navigator.geolocation.getCurrentPosition((location) => {
      this.set(`lat`, location.coords.latitude);
      this.set(`lng`, location.coords.longitude);
      this.set(`zoom`, 16);
    });
  },

  actions: {
    onLocationChangeHandler(lat, lng, results) {
      Ember.Logger.log(`lat: ${lat}, lng: ${lng}`);
      Ember.Logger.debug(results);
    },
  },
});
