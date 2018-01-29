import angular from 'angular';
import HttpInterceptor from './httpInterceptor';
import ClientsService from './clientsService';
import ClientsFactory from './clientsFactory';
import ClustersService from './clustersService';
import ClustersFactory from './clustersFactory';

angular.module('services', [])
.service('ClientsService', ClientsFactory)
.service('ClientsFactory', ClientsService)
.service('ClustersService', ClustersService)
.service('ClustersFactory', ClustersFactory)
.service('HttpInterceptor', HttpInterceptor);
