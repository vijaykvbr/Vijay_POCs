export class FeedbackPanelController {
	constructor($rootScope) {
	      'ngInject';
	      angular.extend(this, { $rootScope });
	  }
	
}

export default {
    bindings: {
    			
    		  },
    templateUrl : 'components/feedbackPanel/feedbackPanel.html',
    controller : FeedbackPanelController
};


