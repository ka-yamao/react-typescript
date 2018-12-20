import { combineReducers, Reducer } from 'redux';
import { MainReducer, MainState, mainAction } from './MainModules';

export interface AppState {
	main: MainState;
}
export const rootReducer: Reducer = combineReducers<AppState>({
	main: MainReducer,
});

export const Actions = {
	main: mainAction,
};
