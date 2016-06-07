/** ***************************************************************************

@name: home.js
@description: Module Controladora da pagina home
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 06/06/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './home.html';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
  this.clickEntreParaOClube = function() {
    alert("Só nóiz na atividade!");
  }
//============================= METHODS =END====================================
  }
}

const name = 'home';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
}
//============================ CONFIG MODULE =END===============================
