interface MyBeer {
  readonly error: object;
  readonly errorCode: string;
  readonly isFetchMyBeerFailed: boolean;
  readonly isLoadingMyBeer: boolean;
  readonly isLoadingCreateMyBeer: boolean;
  readonly isCreateMyBeerFailed: boolean;
}

export default MyBeer;
