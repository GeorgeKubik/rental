import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flatsReducer from './slices/flatsSlice';


const rootReducer = combineReducers({
	flats: flatsReducer
})

export function setupStore() {
	return configureStore({reducer: rootReducer})
}


//Экспорт типов, которые помогут Redux Toolkit получить некоторые фишки от TS

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
