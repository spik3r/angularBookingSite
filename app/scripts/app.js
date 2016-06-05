'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    //$urlRouterProvider.otherwise('/login');
    $urlRouterProvider.otherwise('/dashboard/404');
    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('gallery', {
            url: '/gallery',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/gallery.html'
          })
          .state('about', {
            url: '/about',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/about.html'
          })
          .state('bookings', {
            url: '/bookings',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/bookings.html'
          })
          .state('home', {
            url: '/home',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/home.html'
          })
          .state('404', {
            url: '/404',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/404.html'
          });

  });
