import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flatsReducer from './slices/flatsSlice';


const rootReducer = combineReducers({
	flats: flatsReducer
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer
	})
}