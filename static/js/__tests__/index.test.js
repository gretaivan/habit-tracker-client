const app = require("../index");

describe("index", () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    renderRegisterForm = jest.fn();
    renderUserPage = jest.fn();
    render404 = jest.fn();
    renderLoginForm = jest.fn();
    alert = jest.fn();
    currentUser = jest.fn();
    main = jest.fn();

    describe("updateContent", () => {
        it('calls updateMain with falsy path', () => {
            app.updateContent();
            expect(renderLoginForm).toHaveBeenCalled();
        })
    });

    it('calls alert when path in privateRoutes and there isn\'t a current user', () => {
        currentUser.mockReturnValueOnce(false);
        delete global.window.location;
        global.window = Object.create(window);
        global.window.location = {
        hash: '#habits'
        };
        app.updateContent();
        expect(alert).toHaveBeenCalled();
    })

    describe("updateMain", () => {
        it('calls renderLoginForm when path is #login', () => {
            app.updateMain('#login');
            expect(renderLoginForm).toHaveBeenCalled();
        });
        
        it('calls renderRegisterForm when path is #register', () => {
            app.updateMain('#register');
            expect(renderRegisterForm).toHaveBeenCalled();
        });
        
        it('calls renderUserPage when path is #habits', () => {
            app.updateMain('#habits');
            expect(renderUserPage).toHaveBeenCalled();
        });
        
        it('calls render404 when path does not match any case', () => {
            app.updateMain('banana');
            expect(render404).toHaveBeenCalled();
        });
        
        it('calls renderLoginForm when path is falsy', () => {
            app.updateMain();
            expect(renderLoginForm).toHaveBeenCalled();
        });
    });
});