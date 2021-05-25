/*************************MasterData Types*************************************/
import {
    FETCH_MASTER_DATA_REQUEST,
    FETCH_MASTER_DATA_SUCCESS,
    FETCH_MASTER_DATA_FAILURE,
    } from "../..MasterData/Types/";

import axios from "axios";
    
    export const fetchMasterDataRequest = () => ({
    type: FETCH_MASTER_DATA_REQUEST,
    });
    
    export const fetchMasterDataSuccees = (data) => ({
    type: FETCH_MASTER_DATA_SUCCESS,
    data,
    });
    
    export const fetchMasterDataFailure = (error) => ({
    type: FETCH_MASTER_DATA_FAILURE,
    error,
    });
    
    export const fetchMasterDataAction = () => (dispatch) => {
    
    dispatch(fetchMasterDataRequest());
    const config = {
        headers: {
        Authorization: localStorage.getItem("userAccessToken"),
    },
    };
    
    return axios
        .get(`https://student-info-feathers.herokuapp.com/student?standardID=${id}&feesSubmitted=true&$populate=standardID&$select=fees`,config)
        .then((data) => {
        dispatch(fetchMasterDataSuccees(data));
        })
        .catch((error) => {
        dispatch(fetchMasterDataFailure(error));
        });
    };
    