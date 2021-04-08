const app = require('../auth');

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }
};

global.localStorage = new LocalStorageMock;

global.fetch = require('jest-fetch-mock');

describe('content', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetch.resetMocks();
  });

  afterAll(() => jest.resetAllMocks());

  describe('currentUser', () => {
    it('returns the username from local storage', () => {
      global.localStorage.setItem('username', 'User');
      const result = app.currentUser();
      expect(result).toEqual('User');
    });
  });

  describe('logout', () => {
    it('redirects to index.html', () => {
      delete window.location
      window.location = {
          assign: jest.fn(),
      }
      app.logout();
      expect(window.location.assign).toHaveBeenCalled();
      expect(window.location.assign).toHaveBeenCalledWith("./index.html");
    })
  })

  describe('register', () => {
    it('gives error message if passwords dont match', () => {
      let errorInserted = false;
      jest.spyOn(document, 'createElement').mockReturnValue({textContent: "null", style: {color: "blue"}});
      jest.spyOn(document, 'getElementById').mockReturnValue({childNodes: 'none', children: [1, 2, 3, 4, 5, 6], insertBefore: function(x, y) {errorInserted = true}});
      const data = '{"password": "banana", "confirm": "apple"}';
      app.register(data);
      expect(errorInserted).toEqual(true);
    })
  })

  describe('confirmPassword', () => {
    it('returns true when passwords match', () => {
      const data = {password: "banana", confirm: "banana"};
      result = app.confirmPassword(data);
      expect(result).toEqual(true);
    })
    
    it('returns false when passwords match', () => {
      const data = {password: "banana", confirm: "apple"};
      result = app.confirmPassword(data);
      expect(result).toEqual(false);
    })
  })
});