export default function(awModule) {

	require('./hello.scss');

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

}
