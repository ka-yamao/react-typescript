import { call, put, fork, take } from 'redux-saga/effects';
import { mainAction } from '../modules/MainModules';
import { searchAPI } from '../services';

function* runRequestPlan(text: string) {
	const { data, error } = yield call(searchAPI.search, text);
	if (!error && data && data.header.statusCode === '200' && data.response.hasOwnProperty('hotels')) {
		const hotels: any[] = data.response.hotels;
		if (hotels.length > 0) {
			const hotel: any = hotels[0];
			yield put(mainAction.searchDone(hotel));
		} else {
			yield put(mainAction.searchDone(data));
		}
	} else {
		yield put(mainAction.searchDone('err'));
	}
}

function* handleRequestPlan() {
	while (true) {
		const { payload } = yield take(mainAction.searchStart);
		yield fork(runRequestPlan, payload);
	}
}

export default [
	// 起動したいeffectをこの配列にまとめる. アプリ起動時にindexのallでまとめて起動される
	fork(handleRequestPlan),
];
