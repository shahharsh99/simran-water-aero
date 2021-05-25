import { combineReducers } from "redux";

/**************************Master-Data**********************************/
import GetMasterDataReducer from "./MasterData/getMasterData";

const rootReducer = combineReducers({

/**************************Master-Data**********************************/
  getMasterDataReducer:GetMasterDataReducer
});

export default rootReducer;
