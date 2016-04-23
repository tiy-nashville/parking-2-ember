import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      street: ``,
      city: ``,
      state: ``,
    };
  },
});
