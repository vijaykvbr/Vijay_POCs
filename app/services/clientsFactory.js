export default class ClientsFactory {
	
	constructor($http) {
	      'ngInject';
	      angular.extend(this, {$http});
	  }
	
	getAllClients() {
  		return this.$http.get('json/clients.json');
	}
	
	 static clientsFactory($http){
		return new ClientsFactory($http);
	 }
	
}

ClientsFactory.clientsFactory.$inject = ['$http'];