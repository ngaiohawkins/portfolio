document.querySelector('form').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const question = document.getElementById('question').value.trim();

    if (!firstName || !email || !lastName || !question) {
        event.preventDefault();
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert('Please enter a valid email!');
    }
});