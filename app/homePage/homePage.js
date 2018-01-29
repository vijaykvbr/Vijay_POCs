export class HomeController {

	constructor($rootScope) {
	    'ngInject';
	    angular.extend(this, { $rootScope,}); 
	  }
	
	$onInit() {
		console.log('Test');
	}

	onClickClients(){
		this.pageState = 'clients';
	}

	onClickClusters(){
		this.pageState = 'clusters';
	}
	
}

export default {
    bindings: {},
    controller: HomeController,
    templateUrl: 'homePage/homePage.html'
};