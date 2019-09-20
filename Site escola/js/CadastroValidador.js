
var password = document.getElementById("senha"),
confirm_password = document.getElementById("ConfirmarSenha"),
msg_confirm = document.getElementById('msg-confirm'),
msg_senha = document.getElementById('msg-senha');

function validatePassword() {
if (password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Senhas diferentes!");
  msg_confirm.classList.remove('off');

} else {
  confirm_password.setCustomValidity('');
  msg_confirm.classList.add('off');
}
if(password.value.length < 8)
{
  msg_senha.classList.remove('off');
}
else
{
  msg_senha.classList.add('off');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

