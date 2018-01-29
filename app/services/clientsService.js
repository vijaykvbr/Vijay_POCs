export default class ClientsService {
  constructor(ClientsFactory, $q) {
      'ngInject';
      angular.extend(this, {ClientsFactory, $q});
  }

  getAllClients() {
  	 var defer = this.$q.defer();
  	 this.ClientsFactory.getAllClients().then((reply) => {
  		  defer.resolve(reply);	
  	 });
     return defer.promise;
  }

}

