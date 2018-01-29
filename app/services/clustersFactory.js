export default class ClustersFactory {
	
	constructor($http) {
	      'ngInject';
	      angular.extend(this, {$http});
	  }
	
	getAllClusters() {
  		return this.$http.get('json/clusters.json');
	}

	getAllServersForCluster(){
		return this.$http.get('json/servers.json');
	}
	
	static clustersFactory($http){
		return new ClustersFactory($http);
	}
	
}

ClustersFactory.clustersFactory.$inject = ['$http'];