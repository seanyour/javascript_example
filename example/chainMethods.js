class Count {
  constructor(val) {
    this.initVal = val || 0;
  }

  set(val) {
    this.initVal = val;
    return this;
  }

  get(fn) {
    fn(this.initVal);
    return this;
  }

  increase(val) {
    this.initVal += val;
    return this;
  }

  decrease(val) {
    this.initVal -= val;
    return this;
  }

  multiply(val) {
    this.initVal *= val;
    return this;
  }

  division(val) {
    this.initVal /= val;
    return this;
  }
}

const count = new Count();
count
  .set(10)
  .increase(2)
  .division(2)
  .get((res) => console.log(res));
