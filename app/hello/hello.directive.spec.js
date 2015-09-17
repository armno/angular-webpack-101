export default (awModule) => {
	describe(`hello`, () => {
		beforeEach(window.module(awModule.name));

		it(`should run the test`, () => {
			expect(true).to.be.true;
		});

		it(`should say hello world`, () => {
			expect('hello world').to.equal('hello world');
		});

	});
}
