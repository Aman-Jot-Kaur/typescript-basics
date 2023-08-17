abstract class takepic {
  constructor(public mode: string, public filter: string) {}

  abstract getpic(): void;
  getReel(): string {
    return "non abstract function also possible";
  } //this can be over ridden in extending class also
}

class Insta extends takepic {
  constructor(public mode: string, public filter: string) {
    super(mode, filter);
  }
  getpic(): void {
    console.log("clicked");
  }
}
