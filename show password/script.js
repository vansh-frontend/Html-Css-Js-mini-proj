
document.getElementById('check').onclick = togglePassword;

function togglePassword() {
    var pass = document.getElementById('password');

    if (check.checked) pass.type = "text";
    else pass.type = "password";
}
