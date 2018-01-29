import FeedbackMessage from '../models/feedbackMessage';
class BaseInterceptor {
	  constructor() {
	    ['request', 'requestError', 'response', 'responseError']
	        .forEach((method) => {
	          if(this[method]) {
	            this[method] = this[method].bind(this);
	          }
	        });
	  }
	}

 export default class HttpInterceptor extends BaseInterceptor {

	    /* ngInject */
	    constructor($q,$rootScope) {
	        super();
	        this.$q = $q;
	        this.$rootScope=$rootScope;
	    }

	    responseError(rejection) {
	    	
	    	switch(rejection.status) { 
	    	   case 401: { 
	    		   //Authentication error (Usually will redirect to loging page)
	    		   return ;
	    	      break; 
	    	   } 
	    	   case 504: { 
	    		  this.$rootScope.feedbackMessages=[new FeedbackMessage('error','Service Timeout')];
	    	      return;
	    	      break; 
	    	   } 
	    	   default: { 
	    		   return this.$q.reject(rejection);
	    	      break; 
	    	   } 
	    	
	    	}
	    }
}