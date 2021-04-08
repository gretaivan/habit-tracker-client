const app = require('../auth');

class LocalStorageMock {
  constructor() {
    this.store = {greeting: 'hi'};
  }
  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
    return key;
  }
};

global.localStorage = new LocalStorageMock;

function FormDataMock() {
  this.append = jest.fn();
}
global.FormData = FormDataMock

describe('content', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => jest.resetAllMocks());

  describe('currentUser', () => {
    it('returns the username from local storage', () => {
      global.localStorage.setItem('username', 'User');
      const result = app.currentUser();
      expect(result).toEqual('User');
    });
  });

  describe('authenticate', () => {
    it('calls register and changes window location', async () => {
      let input = {preventDefault: function() {}, target: {id: 'register', username: 'admin', password: 'admin', confirm: 'admin'}}
      jest.spyOn(JSON, 'stringify').mockReturnValue({username: input.target.username, password: input.target.password, confirm: input.target.confirm});
      jest.spyOn(JSON, 'parse').mockReturnValueOnce({username: input.target.username, password: input.target.password, confirm: input.target.confirm});
      jest.spyOn(Object, 'fromEntries').mockReturnValue({});
      delete global.window.location;
      global.window = Object.create(window);
      global.window.location = {
      hash: '#logins'
      };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({msg: `Registration for ${input.target.username} has been successful!`, id: 1, username: input.target.username}),
        })
      );
      alert = jest.fn(i => console.log(i));
      app.authenticate(input);
      expect(alert).not.toBeCalled();
    })
    
    it('calls login and changes window location', async () => {
      let input = {preventDefault: function() {}, target: {id: 'login', username: 'admin', password: 'admin'}}
      jest.spyOn(JSON, 'stringify').mockReturnValue({username: input.target.username, password: input.target.password});
      jest.spyOn(JSON, 'parse').mockReturnValueOnce({username: input.target.username, password: input.target.password});
      jest.spyOn(Object, 'fromEntries').mockReturnValue({});
      delete global.window.location;
      global.window = Object.create(window);
      global.window.location = {
      hash: '#logins'
      };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({msg: `Registration for ${input.target.username} has been successful!`, id: 1, username: input.target.username}),
        })
      );
      alert = jest.fn(i => console.log(i));
      app.authenticate(input);
      expect(alert).not.toBeCalled();
    })
    
    it('catches an error and alerts', async () => {
      let input = {preventDefault: function() {}, target: {id: 'alert', username: 'admin', password: 'admin', confirm: 'admin'}}
      global.fetch = jest.fn(() =>
        Promise.reject({
          json: () => Promise.reject({msg: `Registration for ${input.target.username} has been successful!`, id: 1, username: input.target.username}),
        })
      );
      let alertCalled = false;
      alert = jest.fn(alertCalled = true);
      app.authenticate(input);
      expect(alertCalled).toEqual(true);
    })
  })

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
      const data = '{"password": "tree", "confirm": "leaf"}';
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