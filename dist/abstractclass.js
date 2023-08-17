"use strict";
class takepic {
  constructor(mode, filter) {
    this.mode = mode;
    this.filter = filter;
  }
  getReel() {
    return "non abstract function also possible";
  } //this can be over ridden in extending class also
}
class Insta extends takepic {
  constructor(mode, filter) {
    super(mode, filter);
    this.mode = mode;
    this.filter = filter;
  }
  getpic() {
    console.log("clicked");
  }
}
