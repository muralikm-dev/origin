import { FETCH_DETAILS, FetchDetailsAction, UPDATE_DETAILS, UpdateDetailsAction, UserDetails, FetchDetailsSuccessAction, FETCH_DETAILS_SUCCESS, FetchDetailsFailureAction, FETCH_DETAILS_FAILURE, } from './types';

export const fetchDetails = (): FetchDetailsAction => ({
    type: FETCH_DETAILS,
});

export const fetchParListingSuccess = (payload: UserDetails[]): FetchDetailsSuccessAction => ({
  type: FETCH_DETAILS_SUCCESS,
  payload
});

export const fetchDetailsFailureAction = (error: Error): FetchDetailsFailureAction => ({
  type: FETCH_DETAILS_FAILURE,
  payload: error
});

export const updateDetailsAction = (payload: UserDetails[]): UpdateDetailsAction => ({
    type: UPDATE_DETAILS,
    payload
});
  