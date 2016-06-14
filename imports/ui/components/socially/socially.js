/** ***************************************************************************

@name: socially.js
@description: Modulo principal da Aplicação
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 25/05/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './socially.html';
import { name as Intro } from '../intro/intro';
import { name as Home } from '../home/home';
import { name as Perfil } from '../perfil/perfil';
import { name as Emprestado } from '../emprestado/emprestado';
import { name as Ativo } from '../ativo/ativo';

//import { name as PartyDetails } from '../partyDetails/partyDetails';
//import { name as Navigation } from '../navigation/navigation';


class Socially {}

const name = 'socially';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Home,
  Perfil,
  Emprestado,
  Ativo,
    Intro,
  'accounts.ui'
])
  .component(name, {
    templateUrl: `imports/ui/components/${name}/${name}.html`,
    controllerAs: name,
    controller: Socially
  })
    .config(config)
    .run(run);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
    function config($locationProvider, $urlRouterProvider) {
      'ngInject';
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/intro');
    }

    function run($rootScope, $state) {
      'ngInject';
      $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
          if (error === 'AUTH_REQUIRED') {
            alert('Você precisa logar no sistema para visualizar as Rotas');
            $state.go('home');
          }
        });
    }
//============================ CONFIG MODULE =END===============================
