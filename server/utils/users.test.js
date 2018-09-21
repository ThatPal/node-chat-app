const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'person 1',
            room: 'room 1'
        }, {
            id: 2,
            name: 'person 2',
            room: 'room 2'
        }, {
            id: 3,
            name: 'person 3',
            room: 'room 1'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: 123,
            name: 'a person',
            room: 'a room'
        }
        users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names of room 1', () => {
        var userList = users.getUserList('room 1');
        expect(userList).toEqual(['person 1', 'person 3']);
    });

    it('should return names of room 2', () => {
        var userList = users.getUserList('room 2');
        expect(userList).toEqual(['person 2']);
    });

    it('should remove and return user 1', () => {
        var userId = 1;
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = 7;
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should return user 1', () => {
        var userId = 1;
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not return a user', () => {
        var userId = 7;
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    });
});