import { RootState } from '../types';
import { AppRedirectUrl } from './types';

export const getRedirectUrl = (state: RootState): AppRedirectUrl | null =>
  state.app.redirectUrl;
