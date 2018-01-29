export default function stateConfig($stateProvider, $urlRouterProvider,$httpProvider, $locationProvider) {
    'ngInject';
    $stateProvider.state('clients_infra', {
        abstract: true,
        template: '<home></home>'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('');
    $httpProvider.interceptors.push('HttpInterceptor');
}
