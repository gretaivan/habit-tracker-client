
jest.spyOn(document, 'getElementById').mockReturnValue({
    addEventListener: function() {}
})

jest.spyOn(document, 'getElementsByClassName').mockReturnValue([{
    addEventListener: function() {}
}])


const renderHabit = require('../habit');
const app = require('../habit')


describe('renderHabit', () => {

    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());
    
    appendChild = jest.fn()
    modal = jest.fn();
    modalOpen = jest.fn();
    span = jest.fn();


    

    describe('appendsChild', () =>{
        it('it appends completed to each habit', () => { 
            let appendChild = jest.spyOn(document, 'appendChild').mockReturnValue('<div>completed</div>')
            let testData = {id: 1, habit_name:'coding', frequency: 1}
            
            jest.spyOn(document, 'querySelector').mockReturnValue([{
    append: function() {}
}])
            console.log(main)
            renderHabit(testData)
            expect(appendChild).toHaveBeenCalled()
        })
    })
})
