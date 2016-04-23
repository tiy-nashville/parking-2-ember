import Ember from 'ember';

export default Ember.Controller.extend({
  toggle() {
    const addNew = document.querySelector(`.add-new-wrapper`);
    addNew.classList.toggle(`toggle`);
  },
});
