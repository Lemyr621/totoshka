function changeLoginMethod(){
    var bloop = document.getElementById('mail_field')
    if (bloop === null) {
      number_field.parentNode.removeChild(number_field);
      aut_number.parentNode.removeChild(aut_number);

      var p = document.createElement('p');
      p.className = "registration__text-email";
      p.id = "aut_mail";
      p.innerHTML = "E-mail:";

      var input = document.createElement('input');
      input.className = "registration__login registration__login_active";
      input.id = "mail_field";

      p.appendChild(input);
      aut.parentNode.insertBefore(p, aut.nextSibling);
    }else{
      mail_field.parentNode.removeChild(mail_field);
      aut_mail.parentNode.removeChild(aut_mail);

      var p = document.createElement('p');
      p.className = "registration__text-number";
      p.id = "aut_number";
      p.innerHTML = "Телефон:";

      var input = document.createElement('input');
      input.className = "number_field";
      input.id = "number_field";
      input.value = "+7(___)___-____";

      p.appendChild(input);
      aut.parentNode.insertBefore(p, aut.nextSibling);
    }
}

function checkEmail(str) {
  var result = str.match(/^[0-9-a-z-\.]+\@[0-9-a-z]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    return false;
  } else {
    return true;
  }
}
mail_field.onblur = function() {
  if (!checkEmail(this.value)) {
    mailAddErrMesage();
  } else {
    document.getElementsByClassName('registration__login')[0].style.backgroundColor = 'green';
  }
}
mail_field.onfocus = function() {
  document.getElementsByClassName('registration__login')[0].style.backgroundColor = '#484d56';
  mail_field.parentNode.removeChild(mail_alert_id);
}

function checkNumber(str) {
  if (str.indexOf("_")>0) {
    return false;
  } else {
    return true;
  }
}

number_field.onblur = function() {
  if (!checkNumber(this.value)) {
    numberAddErrMesage();
  } else {
    document.getElementsByClassName('number_field')[0].style.backgroundColor = 'green';
  }
}
number_field.onfocus = function() {
  alert("sasi");
  document.getElementsByClassName('number_field')[0].style.backgroundColor = '#484d56';
  number_field.parentNode.removeChild(number_alert_id);
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

function checkPassword(pass) {
  if (pass.length < 6) {
    return false;
  }
  return true;
}

function registration() {
  var bloop = document.getElementById('mail_field')
  if (bloop === null) {
    var phone = document.getElementsByClassName('number_field')[0].value;
    var passConfirm = document.getElementsByClassName('password-block__password-repeat')[0].value;
    if (checkNumber(phone) && checkPassword(passConfirm)) {
      alert("Вошли через телефон");
      return true;
    } else {
      numberAddErrMesage();
      passwordAddErrMesage();
    }
  }else{
    var email = document.getElementsByClassName('registration__login')[0].value;
    var passConfirm = document.getElementsByClassName('password-block__password-repeat')[0].value;
    if (checkEmail(email) && checkPassword(passConfirm)) {
      alert("Вошли через Маил");
      return true;
    } else {
      mailAddErrMesage();
      passwordAddErrMesage();
    }

  }
  return false;
}

function mailAddErrMesage() {
  var bloop = document.getElementById('mail_alert_id')
  if (bloop === null) {
    var div = document.createElement('div');
    div.className = "alert";
    div.id = "mail_alert_id"
    div.innerHTML = "you have entered an incorrect login";
    mail_field.parentNode.insertBefore(div, mail_field.nextSibling);
    document.getElementsByClassName('registration__login')[0].style.backgroundColor = 'red';
  }
}

function numberAddErrMesage() {
  var bloop = document.getElementById('number_alert_id')
  if (bloop === null) {
    var div = document.createElement('div');
    div.className = "alert";
    div.id = "number_alert_id"
    div.innerHTML = "you have entered an incorrect number";
    number_field.parentNode.insertBefore(div, number_field.nextSibling);
    document.getElementsByClassName('number_field')[0].style.backgroundColor = 'red';
  }
}

function passwordAddErrMesage() {
  var bloop = document.getElementById('password_alert_id')
  if (bloop === null) {
    var div = document.createElement('div');
    div.className = "alert";
    div.id = "password_alert_id"
    div.innerHTML = "passwords do not match or are less than 6 characters long";
    password_field.parentNode.insertBefore(div, password_field.nextSibling);
    document.getElementsByClassName('password-block__password')[0].style.backgroundColor = 'red';
    document.getElementsByClassName('password-block__password-repeat')[0].style.backgroundColor = 'red';
  }
}
