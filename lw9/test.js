describe("Проверка номера", function() {

  function makeTest(x, y) {
    it("при указании номера " + x + " и отправке кода " + y, function() {
      assert.equal(SMS(x, y), true);
    });
  }

  function test(checkNomber, userCode) {
    makeTest(checkNomber, userCode);
    var check = "111111"
    makeTest(check, userCode);
    var check = "11111132143241111"
    makeTest(check, userCode);
    var check = "111фв11111"
    makeTest(check, userCode);
    var check = ""
    makeTest(check, userCode);
  }
  var checkNomber = "1111111111"
  var userCode = "1111"
  test(checkNomber, userCode);
  var userCode = "2222"
  test(checkNomber, userCode);
});

describe("Проверка почты", function() {

  function makeTest(x, y) {
    it("при указании почты " + x + " и отправке кода " + y, function() {
      assert.equal(Email(x, y), true);
    });
  }

  function test(check, userCode) {
    makeTest(check, userCode);
    var check = "@mail.mail"
    makeTest(check, userCode);
    var check = "mail@mail"
    makeTest(check, userCode);
    var check = "mail@mail."
    makeTest(check, userCode);
    var check = ""
    makeTest(check, userCode);
  }
  var check = "mail@mail.mail"
  var userCode = "1111"
  test(check, userCode)
  var userCode = "2222"
  test(check, userCode)
});
