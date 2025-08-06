const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const zipField = document.getElementById('zip');

const patterns = {
    // тільки літери, маленькі та великі, пробіли
    // від 2 до 20
    name: /^[A-Za-z\s]{2,20}$/,
    nameRestrictictedChars: /[!@#$_%^&*()-+]/g,
    // a@b
    // name@domain
    // тільки літери, маленькі та великі + ._+-
    email: /^[a-z0-9._+-]+@[a-z0-9._+-]+$/i,
    // +380XXXXXXXXX
    phone: /^\+380\d{9}$/,
    // XXXXX digits
    zip: /^\d{5}$/,
};

function validateField(field, pattern, errorID, errorMsg) {
    const value = field.value.trim();
    const errorBox = document.getElementById(errorID);

    if (pattern.test(value)) {
        errorBox.textContent = '';
    } else {
        errorBox.textContent = errorMsg;
    }
}
d
function fixNameInput(field, pattern) {
    const value = field.value.trim();
    const updatedValue = value.replace(pattern, '');

    field.value = updatedValue;
}

nameField.addEventListener('input', function (e) {
    validateField(e.target, patterns.name, 'nameError', 'wrong name');
});

nameField.addEventListener('input', function (e) {
    fixNameInput(e.target, patterns.nameRestrictictedChars);
});

emailField.addEventListener('input', function (e) {
    validateField(e.target, patterns.email, 'emailError', 'wrong EMAIL');
});

phoneField.addEventListener('input', function (e) {
    validateField(e.target, patterns.phone, 'phoneError', 'wrong PHONE');
});

zipField.addEventListener('input', function (e) {
    validateField(e.target, patterns.zip, 'zipError', 'wrong ZIP');
});
