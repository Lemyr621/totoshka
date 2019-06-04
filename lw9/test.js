describe("Проверка номера", function() {

  function makeTest(x) {
    it("при указании номера " + x.phoneNumber , function() {
      assert.equal(x.checkNumber(),true);
    });
  }
    var sms = new SMS("1234567891");
    makeTest(sms);
});

describe("Проверка почты", function() {

  function makeTest(x) {
    it("при указании адреса " + x.mail , function() {
      assert.equal(x.checkMail(),true);
    });
  }
    var email = new Email("mlo@mlo.mlo");
    makeTest(email);
});

describe("Проверка создания кода", function() {

  function makeTest() {
    it("создание кода", function() {
      assert.equal(userCode, recovery.code);
    });
  }
  makeTest();
});

describe("Проверка введёного кода", function() {

  function makeTest() {
    it("создание кода", function() {
      assert.equal(result, true);
    });
  }
  makeTest();
});
