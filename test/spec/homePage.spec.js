describe('Home', function() {
  var svcAgmNbr = element(by.model('$ctrl.serviceAgreementDetails.svcAgmtNum'));
  var retrieveBtn = element(by.id('retrieve'));
  var transportations = element.all(by.repeater('row in $ctrl.inputList'));
 
  beforeEach(function() {
    browser.get('http://localhost:9001/#/');
  });

  it('check Tranportations for 157946', function() {
	  svcAgmNbr.sendKeys(157946)
	  retrieveBtn.click();
	  retrieveBtn.click();
	  expect(transportations.count()).toEqual(4);
	  browser.sleep(8000);
	  // This is wrong!
  });
});