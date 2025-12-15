async function fetchUser(id = 7) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) throw new Error('User not found');

    return await response.json();
}

function renderUser(user) {
    const el = document.getElementById('user');

    el.textContent = `${user.name} (${user.email})`;
}

module.exports = { fetchUser, renderUser };
