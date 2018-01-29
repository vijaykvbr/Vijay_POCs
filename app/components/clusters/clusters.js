export class ClustersController {

  constructor($rootScope, ClustersService) {
      'ngInject';
      angular.extend(this, {$rootScope, ClustersService});
  }
  
  $onChanges(changes){

	}
	
  $onInit() {
    this.ClustersService.getAllClusters().then((response)=>{
      this.clusters = response.data;
    });
  }

  openClusterInfo(){
    this.isShowServers = true;
  }

}

export default {
    bindings: {
    	 		
    		  },
    controller: ClustersController,
    templateUrl: 'components/clusters/clusters.html'
};


