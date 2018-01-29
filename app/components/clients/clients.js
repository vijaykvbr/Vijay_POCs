export class ClientsController {

  constructor($rootScope, ClientsService) {
      'ngInject';
      angular.extend(this, {$rootScope, ClientsService});
  }
  
  $onChanges(changes){

	}
	
  $onInit() {
    this.ClientsService.getAllClients().then((response)=>{
      this.clients = response.data;
    });
  }

  onEditClient(){
    console.log('In EditCl');
  }

  onDeleteClient(){
   /* $scope.opts = {
      templateUrl : 'deleteModal.html',
      controller : DeleteModalCtrl,
      resolve: {} 
    };
    
    $scope.opts.resolve.item = function() {
        return angular.copy({name:$scope.name}); // pass name to Dialog
    }
    
    var modalInstance = $modal.open($scope.opts);
    modalInstance.result.then(function(){
      console.log('On Okay')
    },function(){
      console.log("Modal Closed");
    });*/
  }

  onClearClient(){
    this.client = {};
  }

}

export default {
    bindings: {
    	 		
    		  },
    controller: ClientsController,
    templateUrl: 'components/clients/clients.html'
};


