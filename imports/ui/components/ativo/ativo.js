/** ***************************************************************************

@name: ativo.js
@description: Module Controladora da pagina ativo - Quando o usuário tem algo
para emprestar.
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 06/06/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './ativo.html';

class Ativo {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================

//============================= METHODS =END====================================
  }
}

const name = 'ativo';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Ativo
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ativo', {
      url: '/ativo',
      template: '<ativo></ativo>'
    });
}
//============================ CONFIG MODULE =END===============================
