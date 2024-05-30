$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // prevent default form submission
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'admin' && password === 'admin123') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
