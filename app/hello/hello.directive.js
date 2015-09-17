export default function(awModule) {
	awModule.directive('hello', () => {
		return {
			restrict: 'E',
			template: require('./hello.html'),
			controllerAs: 'hello',
			controller: function() {
				this.label = 'Hello world';
			}
		};
	});
};
