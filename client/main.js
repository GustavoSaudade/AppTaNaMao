import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import { name as AppTaNaMao } from '../imports/ui/components/socially/socially';

function onReady() {
  angular.bootstrap(document, [
    AppTaNaMao
  ], {
    strictDi: true
  });

// =========== CARROSSEL IMAGENS DE FUNDO ============

// =========== CARROSSEL IMAGENS DE FUNDO ============
}


if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
