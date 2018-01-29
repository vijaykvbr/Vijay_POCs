export default class ClustersService {
  constructor(ClustersFactory, $q) {
      'ngInject';
      angular.extend(this, {ClustersFactory, $q});
  }

  getAllClusters() {
  	var defer = this.$q.defer();
  	this.ClustersFactory.getAllClusters().then((reply) => {
  		  defer.resolve(reply);	
  	  });
      return defer.promise;
  }

  getAllServersForCluster(){
     var defer = this.$q.defer();
     this.ClustersFactory.getAllServersForCluster().then((reply) => {
        defer.resolve(reply); 
     });
     return defer.promise;
  }


}

