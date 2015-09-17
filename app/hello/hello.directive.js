export default function(awModule) {
	awModule.directive('hello', () => {
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
