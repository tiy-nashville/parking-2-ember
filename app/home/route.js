import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://58abc252.ngrok.io/parking-spots`)
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  },
});
