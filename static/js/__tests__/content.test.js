const app = require('../content');

describe("content", () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    main = jest.fn();
    changeForm = jest.fn();
    authenticate = jest.fn();

    describe("render404", () => {
        it('appends items 4 times', () => {
            let appendedItems = 0;
            jest.spyOn(document, 'createElement').mockReturnValue({setAttribute: function(id, text) {}, appendChild: function(child) {appendedItems++}});
            main.appendChild = jest.fn().mockReturnValue(appendedItems++);
            app.render404();
            expect(appendedItems).toEqual(4);
        });
    });

    describe("renderLoginForm", () => {
        it('appends items 4 times', () => {
            let appendedItems = 0;
            jest.spyOn(document, 'createElement').mockReturnValue({setAttribute: function(id, text) {}, appendChild: function(child) {appendedItems++}, addEventListener: function(type, func) {}});
            jest.spyOn(document, 'getElementById').mockReturnValue({addEventListener: function(type, func) {}});
            main.appendChild = jest.fn().mockReturnValueOnce(appendedItems++).mockReturnValueOnce(appendedItems++);
            main.setAttribute = jest.fn();
            app.renderLoginForm();
            expect(appendedItems).toEqual(5);
        });
    });

    describe("renderRegisterForm", () => {
        it('appends items 12 times', () => {
            let appendedItems = 0;
            jest.spyOn(document, 'createElement').mockReturnValue({setAttribute: function(id, text) {}, appendChild: function(child) {appendedItems++}, addEventListener: function(type, func) {}});
            jest.spyOn(document, 'getElementById').mockReturnValue({addEventListener: function(type, func) {}});
            main.appendChild = jest.fn().mockReturnValueOnce(appendedItems++).mockReturnValueOnce(appendedItems++).mockReturnValueOnce(appendedItems++);
            main.setAttribute = jest.fn();
            app.renderRegisterForm();
            expect(appendedItems).toEqual(12);
        });
    });

    describe("renderUserPAge", () => {
        it('redirects page to habitPage', () => {
            delete window.location
            window.location = {
                assign: jest.fn(),
            }
            app.renderUserPage();
            expect(window.location.assign).toHaveBeenCalled();
        });
    });
});