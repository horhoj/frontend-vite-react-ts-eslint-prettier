export interface InitialState {
  redirectUrl: AppRedirectUrl | null;
}

export interface AppRedirectUrl {
  path: string;
}
