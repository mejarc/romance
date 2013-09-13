
var myStepDefinitionsWrapper = function () {
		this.Given(/^I am on Google$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.When(/^I search for "([^"]*)"$/, function(arg1, callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^I see a link to "([^"]*)"$/, function(arg1, callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});
};
