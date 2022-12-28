import { AppDispatch } from "../index";
import axios from "../../axios/index";
import {flatsSlice} from "../slices/flatsSlice";

export const fetchData = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(flatsSlice.actions.fetching())
			const response = await axios.get('flats');
			dispatch(flatsSlice.actions.fetchSuccess(response.data))
		} catch (err) {
			dispatch(flatsSlice.actions.fetchError(err as Error));
			console.log('Error');
			
		}
	}
}