import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://204459de.ngrok.io/parking-spots`)
      .then((results) => results.json())
      .then((data) => {
        return data;
      });
  },
});
