export class ServersController {

  constructor($rootScope, ClustersService) {
      'ngInject';
      angular.extend(this, {$rootScope, ClustersService});
  }
  
  $onChanges(changes){

	}
	
  $onInit() {
    this.ClustersService.getAllServersForCluster().then((response)=>{
      console.log(response.data)
      this.servers = response.data;
    });
  }

}

export default {
    bindings: {
    	 		
    		  },
    controller: ServersController,
    templateUrl: 'components/servers/servers.html'
};


