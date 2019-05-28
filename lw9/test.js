describe("Проверка номера/адреса", function() {

  function makeTest(x) {
    it("при указании номера/адреса" + x , function() {
      assert.equal(Send(x), "111");
    });
  }

    var check = "1234567891"
    makeTest(check);
});

describe("Проверка кода", function() {

  function makeTest(x) {
    it("при указании кода " + x, function() {
      assert.equal(check(x), true);
    });
  }
    var code = "111"
    makeTest(code);
});
