/**
 * @jest-environment jsdom
 */
const { fetchUser, renderUser } = require('../js/UserApi');

describe('fetchUser', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    test('user retrieved ok', async () => {
        const fakeUser = { id: 7, name: 'Jane', email: 'jane@google.com' };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => fakeUser,
        });

        const user = await fetchUser(7);

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/7');
        expect(user).toEqual(fakeUser);
    });

    test('user not found', () => {
        fetch.mockResolvedValueOnce({
            ok: false,
        });

        expect(fetchUser(999)).rejects.toThrow('User not found');
    });
});

describe('renderUser', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="user"></div>';
    });

    test('users rendering', () => {
        renderUser({ name: 'Roman', email: 'yaremiyroman@gmail.com' });
        const userDiv = document.getElementById('user');
        expect(userDiv.textContent).toBe('Roman (yaremiyroman@gmail.com)');
    });
});

