const app = require('../content');

describe("content", () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());
    
    main = jest.fn();

    describe("render404", () => {
        it('appends items 4 times', () => {
            let appendedItems = 0;
            jest.spyOn(document, 'createElement').mockReturnValue({setAttribute: function(id, text) {}, appendChild: function(child) {appendedItems++}});
            main.appendChild = jest.fn().mockReturnValue(appendedItems++);
            app.render404();
            expect(appendedItems).toEqual(4);
        });
    });
});