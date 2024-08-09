$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = $('#email').val();
        const password = $('#password').val();

        $.post('/login', { email, password }, function(data) {
            if (data.valid) {
                $('#errormsg').hide();
                // Redirect or perform further actions on success
            } else {
                $('#errormsg').show();
            }
        });
    });
});
