// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return a invalid message if gamertag length is not be at least 8 characters', () => {
        const result = isValid("s");
        expect(result).toBe("Invalid - gamertag length must be at least 8 characters");
    });
    test('should return a valid message if gamertag length is at least 8 characters', () => {
        const result = isValid("sfrefrefr");
        expect(result).toBe("The gamerTag is valid");
    });
});
