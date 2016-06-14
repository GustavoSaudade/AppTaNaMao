/** ***************************************************************************

@name: perfil.js
@description: Module Controladora da pagina perfil
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 07/06/2016

**************************************************************************** **/
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './perfil.html';

class Perfil {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.showTitle = "meuTaNaMao";
    this.showDiv = "novidades";
//============================= SUBSCRIBES =====================================

//============================= SUBSCRIBES =END=================================
//============================= METHODS ========================================
  this.clicaMinhaEstante = function() {
    this.showTitle = "minhaEstante";
    this.showDiv = "minhaEstante";
  }

  this.clicaMeuTaNaMao = function() {
    this.showTitle = "meuTaNaMao";
    this.showDiv = "novidades";
  }
  
  this.clicaMeuPerfil = function() {
    this.showTitle = "meuPerfil";
    this.showDiv = "meuPerfil";
  }
//============================= METHODS =END====================================
  }
}

const name = 'perfil';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Perfil
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
  function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('perfil', {
      url: '/perfil',
      template: '<perfil></perfil>'
    });
}
//============================ CONFIG MODULE =END===============================
