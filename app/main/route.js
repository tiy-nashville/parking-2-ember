import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://22c6fc86.ngrok.io/parking-spots`)
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  },
});
