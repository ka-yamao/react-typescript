import { all } from 'redux-saga/effects';
import SearchSaga from './SearchSaga';

export default function* rootSagas() {
	// prettier-ignore
	yield all([
		...SearchSaga,
	]);
}
