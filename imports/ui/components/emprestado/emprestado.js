/** ***************************************************************************

@name: emprestado.js
@description: Module Controladora da pagina emprestado - Quando o usuário quer
PEGAR emprestado.
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 07/06/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './emprestado.html';

class Emprestado {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
  
//============================= METHODS =END====================================
  }
}

const name = 'emprestado';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Emprestado
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('emprestado', {
      url: '/emprestado',
      template: '<emprestado></emprestado>'
    });
}
//============================ CONFIG MODULE =END===============================
