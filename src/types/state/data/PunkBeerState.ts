interface PunkBeers {
  beers: PunkBeer[];
  readonly error: {
    readonly code: string;
    readonly message: string;
  };
}

interface PunkBeer {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly tagline: string;
  readonly imageUrl: string;
  readonly ingredients: {}[];
}

export default PunkBeers;
