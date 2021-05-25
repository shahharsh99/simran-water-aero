/*************************MasterData Types*************************************/
import {
    FETCH_MASTER_DATA_REQUEST,
    FETCH_MASTER_DATA_SUCCESS,
    FETCH_MASTER_DATA_FAILURE,
} from '../../Types/MasterData'


const initialState = {
    data: null,
    error: null,
    isLoading: false,
};

const GetMasterDataReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_MASTER_DATA_REQUEST:
        return {
        ...state,
        isLoading: true,
        };
    case FETCH_MASTER_DATA_SUCCESS:
        return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
        };
    case FETCH_MASTER_DATA_FAILURE:
        return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error.response,
        };
    default:
        return state;
    }
};

export default GetMasterDataReducer;
      