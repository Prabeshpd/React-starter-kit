interface PunkBeer {
  readonly error: object;
  readonly errorCode: string;
  readonly isFetchPunkBeerFailed: boolean;
  readonly isLoadingPunkBeer: boolean;
}

export default PunkBeer;
