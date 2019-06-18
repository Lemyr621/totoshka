function checkEmail(str) {
  var result = str.match(/^[0-9-a-z-\.]+\@[0-9-a-z]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    return false;
  } else {
    return true;
  }
}
mail_field.onblur = function() {
    if (!checkEmail(this.value)){
      mailAddErrMesage();
    }
      else {
          document.getElementsByClassName('registration__login')[0].style.backgroundColor = 'green';
      }
}
mail_field.onfocus = function() {
  document.getElementsByClassName('registration__login')[0].style.backgroundColor = '#484d56';
  mail_field.parentNode.removeChild(mail_alert_id);
}

password_field.onblur = function() {
  var pass = document.getElementsByClassName('password-block__password')[0].value;
  if (!checkPassword(pass, this.value)) {
    passwordAddErrMesage();
  } else {
    document.getElementsByClassName('password-block__password')[0].style.backgroundColor = 'green';
    document.getElementsByClassName('password-block__password-repeat')[0].style.backgroundColor = 'green';
  }
}

password_field.onfocus = function() {
  document.getElementsByClassName('password-block__password')[0].style.backgroundColor = '#484d56';
  document.getElementsByClassName('password-block__password-repeat')[0].style.backgroundColor = '#484d56';
  password_field.parentNode.removeChild(password_alert_id);
}

function checkPassword(pass, confrim) {
  if (pass.length < 6) {
    return false;
  }
  if (pass != confrim) {
    return false;
  }
  return true;
}

function checkAgreementRules() {
  var result = document.getElementsByClassName('registration__check-confirmation')[0].checked;
  if (result) {
    return true;
  } else
    alert('Примите условия соглашения!');
}

function registration() {
  var email = document.getElementsByClassName('registration__login')[0].value;
  var pass = document.getElementsByClassName('password-block__password')[0].value;
  var passConfirm = document.getElementsByClassName('password-block__password-repeat')[0].value;
  if (checkEmail(email) && checkPassword(pass, passConfirm) && checkAgreementRules()) {
    return true;
  } else {
    mailAddErrMesage();
    passwordAddErrMesage();
  }
  return false;
}

document.getElementsByClassName('registration')[0].onsubmit = function() {
  return registration();
};

function mailAddErrMesage(){
    var bloop = document.getElementById('mail_alert_id')
    if(bloop===null){
    var div = document.createElement('div');
    div.className = "alert";
    div.id = "mail_alert_id"
    div.innerHTML = "you have entered an incorrect login";
    mail_field.parentNode.insertBefore(div, mail_field.nextSibling);
    document.getElementsByClassName('registration__login')[0].style.backgroundColor = 'red';
  }
}
function passwordAddErrMesage(){
  var bloop = document.getElementById('password_alert_id')
  if(bloop===null){
var div = document.createElement('div');
div.className = "alert";
div.id = "password_alert_id"
div.innerHTML = "passwords do not match or are less than 6 characters long";
password_field.parentNode.insertBefore(div, password_field.nextSibling);
document.getElementsByClassName('password-block__password')[0].style.backgroundColor = 'red';
document.getElementsByClassName('password-block__password-repeat')[0].style.backgroundColor = 'red';
}
}
