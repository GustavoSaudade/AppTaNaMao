/** ***************************************************************************

@name: intro.js
@description: Module Controladora da pagina intro
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 14/06/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './intro.html';

class Intro {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
  
//============================= METHODS =END====================================
  }
}

const name = 'intro';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Intro
})
  .config(config)
    .run(run);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('intro', {
      url: '/intro',
      template: '<intro></intro>'
    });
}

function run($state) {
    'ngInject';
    setTimeout(function(){ $state.go('home'); }, 3000);
}
//============================ CONFIG MODULE =END===============================
