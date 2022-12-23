import { AppDispatch } from "../index";
import axios from "../../axios/index";
import { IFlats, ServerResponse } from '../../variables/variablesFlats';
import {flatsSlice} from "../slices/flatsSlice";

export const fetchData = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(flatsSlice.actions.fetching())
			const response = await axios.get<ServerResponse<IFlats>>('flats');
			dispatch(flatsSlice.actions.fetchSuccess(
				response.data.flats
			))
			
		} catch (err) {
			dispatch(flatsSlice.actions.fetchError(err as Error));
			console.log('Error');
			
		}
	}
}