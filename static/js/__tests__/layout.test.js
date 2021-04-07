const app = require('../layout');

describe("layout", () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe("changeForm", () => {
        it('changes hash to #register when register form is not displayed', () => {
            jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);
            app.changeForm();
            expect(window.location.hash).toEqual('#register');
        });
        
        it('changes hash to #login when register form is displayed', () => {
            jest.spyOn(document, 'getElementById').mockReturnValueOnce(true);
            app.changeForm();
            expect(window.location.hash).toEqual('#login');
        });
    });
});