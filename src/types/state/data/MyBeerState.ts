interface MyBeers {
  beers: MyBeer[];
  readonly error: {
    readonly code: string;
    readonly message: string;
  };
}

interface MyBeer {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly genre: string;
}

export default MyBeers;
