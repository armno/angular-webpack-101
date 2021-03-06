export default function(awModule) {

	if (ON_TEST) {
		require('./hello.directive.spec')(awModule);
	}

	require('./hello.scss');

	awModule.directive('hello', function($log) {
		return {
			restrict: 'E',
			template: require('./hello.html'),
			controllerAs: 'hello',
			controller: function() {
				this.label = 'Hello world';
				$log.log('hello');
			}
		};
	});

}
