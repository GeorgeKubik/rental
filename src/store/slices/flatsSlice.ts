	import {IFlats} from '../../variables/variablesFlats';
	import {createSlice, PayloadAction} from '@reduxjs/toolkit';

	interface FlatsSlice {
		loading: boolean;
		error: string;
		flats: IFlats[];
		filters: string
	}

	const initialState: FlatsSlice = {
		loading: false,
		error: '',
		flats: [],
		filters: 'flats'
	}

	export const flatsSlice = createSlice({
		name: 'flats',
		initialState,
		reducers: {
			fetching(state) {
				state.loading = true;
			},
			fetchSuccess(state, action: PayloadAction<IFlats[]>) {
				state.loading = false;
				state.flats = action.payload; 
			},
			fetchError(state, action: PayloadAction<Error>) { 
				state.loading = false;
				state.error = action.payload.message;
			}
		}
	})

	export default flatsSlice.reducer;