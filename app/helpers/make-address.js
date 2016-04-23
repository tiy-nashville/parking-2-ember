import Ember from 'ember';

export function makeAddress([spot]/*, hash*/) {
  return `${spot.street} ${spot.city} ${spot.state}`;
}

export default Ember.Helper.helper(makeAddress);
