import { FETCH_DETAILS, FETCH_DETAILS_SUCCESS, UPDATE_DETAILS, FetchDetailsAction, UpdateDetailsAction, UserDetails, UserDetailsState, UserDetailsTypes, FETCH_DETAILS_FAILURE, UPDATE_DETAILS_SUCCESS, UPDATE_DETAILS_FAILURE } from './types';
import { UserDetailsSample } from '../UserDetailsSample';

const initialState: UserDetailsState = {
    data: [],
    loading: false,
    updated: false,
};
   

export const userDetailsReducer = (state: UserDetailsState = initialState, action: UserDetailsTypes): UserDetailsState => {
    switch (action.type) {
        case FETCH_DETAILS: 
            // const data:UserDetails[] = UserDetailsSample;
            return {...state, loading: true, updated: false};
        case FETCH_DETAILS_SUCCESS:
            const data = action.payload;
            console.log(data);
            return { ...state, data, loading: true, updated: false };
        case FETCH_DETAILS_FAILURE:
            return { ...state, loading: false, updated: false };
        case UPDATE_DETAILS: 
            return {...state, loading: true, updated: false};
        case UPDATE_DETAILS_SUCCESS:
            const updateData = action.payload;
            console.log(updateData);
            return { ...state, data: updateData, loading: true, updated: false };
        case UPDATE_DETAILS_FAILURE:
            return { ...state, loading: false, updated: false };
        
        default:
            return { ...state, loading: false, updated: false };
    }
}

export const userDetails = (state: { data: any; }) => state.data;