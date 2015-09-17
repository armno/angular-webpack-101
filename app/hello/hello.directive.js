module.exports = function(awModule) {
	awModule.directive('hello', function() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'hello/hello.html',
			controllerAs: 'hello',
			controller: function() {
				var hello = this;
				this.label = 'Hello world';
			}
		};
	});
};
