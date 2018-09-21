const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Admin';
        let text = 'Some text';
        let message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate message object with url', () => {
        let from = 'Mister';
        let lat = 10;
        let lng = 20;
        let url = 'https://www.google.com/maps?q=10,20';
        let message = generateLocationMessage(from, lat, lng);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});