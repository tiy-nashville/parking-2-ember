import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('main');
  this.route('add');
  this.route(`login`);
  this.route(`home`, {path: `/`});

  this.route(`about`);
  this.route(`contact`);
  this.route('login');
});

export default Router;
