import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

export const mainAction = {
	searchStart: actionCreator<string>('ACTIONS_SEARCH_START'),
	searchDone: actionCreator<string>('ACTIONS_SEARCH_DONE'),
};

export interface MainState {
	name: string;
	email: string;
}

const initialState: MainState = {
	name: '',
	email: '',
};

export const MainReducer = reducerWithInitialState(initialState)
	.case(mainAction.searchStart, (state, name) => {
		return { ...state, name };
	})
	.case(mainAction.searchDone, (state, email) => {
		return { ...state, email };
	});
