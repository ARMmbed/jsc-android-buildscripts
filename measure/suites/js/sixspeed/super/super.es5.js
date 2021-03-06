module.exports = {
  run: function (assertEqual) {

    function C() {
      this.foo = 'bar';
    }
    C.prototype.bar = function () {
      return 41;
    };


    function D() {
      C.call(this);
      this.baz = 'bat';
    }
    D.prototype = Object.create(C.prototype);
    D.prototype.bar = function () {
      return C.prototype.bar.call(this) + 1;
    };
    function fn() {
      var d = new D();
      return d.bar();
    }

    assertEqual(fn(), 42);

  }
};
