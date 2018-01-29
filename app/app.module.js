import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appConfig from './app.config';
import homePage from './homePage/homePage';
import feedbackPanel from './components/feedbackPanel/feedbackPanel';
import clientsInfo from './components/clients/clients';
import clustersInfo from './components/clusters/clusters';
import serversInfo from './components/servers/servers';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/main.scss';
import './services/services.module';


export default angular.module('clients_infra', [uiRouter, 'services'])
.config(appConfig)
.component('home', homePage)
.component('feedbackPanel', feedbackPanel)
.component('clientsInfo', clientsInfo)
.component('clustersInfo', clustersInfo)
.component('serversInfo', serversInfo);

