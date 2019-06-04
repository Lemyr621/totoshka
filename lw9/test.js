describe("Проверка номера", function() {

    it("проверка на валидность номера 1234567891" , function() {
        var sms = new SMS("1234567891");
      assert.equal(sms.checkNumber(),true);
    });
    it("проверка на валидность номера 123456789" , function() {
        var sms = new SMS("123456789");
      assert.equal(sms.checkNumber(),true);
    });
    it("проверка на валидность номера 1234567ф91" , function() {
        var sms = new SMS("1234567ф91");
      assert.equal(sms.checkNumber(),true);
    });
});

describe("Проверка почты", function() {

    it("проверка на валидность адреса mlo@mlo.mlo", function() {
        var email = new Email("mlo@mlo.mlo");
      assert.equal(email.checkMail(),true);
    });

        it("проверка на валидность адреса mlomlo.mlo", function() {
            var email = new Email("mlomlo.mlo");
          assert.equal(email.checkMail(),true);
        });

});

describe("создание кода", function() {

    it("При создании оъекта var recovery = new RecoveryPassword(sms,1234567891); новый созданный код сгенерирован корректно", function() {
      var recovery = new RecoveryPassword("sms","1234567891");
      var userCode =""+ recovery.sendCode();
      assert.equal(userCode.length > 0, true);
    });

    it("При создании оъекта var recovery = new RecoveryPassword(sm,1234567891); новый созданный код сгенерирован корректно", function() {
      var recovery = new RecoveryPassword("sm","1234567891");
      var userCode =""+ recovery.sendCode();
      assert.equal(userCode.length > 0, true);
    });

    it("При создании оъекта var recovery = new RecoveryPassword(email,mlo@mlo.mlo1); новый созданный код сгенерирован корректно", function() {
      var recovery = new RecoveryPassword("emal","mlo@mlo.mlo");
      var userCode =""+ recovery.sendCode();
      assert.equal(userCode.length > 0, true);
    });

    it("При создании оъекта var recovery = new RecoveryPassword(sm,mlo@mlo.mlo); новый созданный код сгенерирован корректно", function() {
      var recovery = new RecoveryPassword("emial","mlo@mlo.mlo");
      var userCode =""+ recovery.sendCode();
      assert.equal(userCode.length > 0, true);
    });

    it("код не отправляется при невалидном recepient", function() {
      var recovery = new RecoveryPassword("sms","112");
      var userCode = ""+recovery.sendCode();
      assert.equal(userCode,recovery.code);
    });

});

describe("Проверка введёного кода", function() {

    it("создание кода", function() {
      var recovery = new RecoveryPassword("sms","1234567891");
      var result = recovery.checkCode("111");
      assert.equal(result, true);
    });

});
