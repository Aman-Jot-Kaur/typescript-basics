interface camera {
  mode: string;
  filter: string;
  burst: number;
}
interface Story {
  create(): void;
}
class Instagram implements camera, Story {
  constructor(
    public mode: string,
    public filter: string,
    public burst: number,
    public short: string // we can add extra things but must add all from interface
  ) {}
  create(): void {}
}
