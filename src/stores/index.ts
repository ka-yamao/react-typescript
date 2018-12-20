import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas';
import { rootReducer } from '../modules';
import storage from 'redux-persist/lib/storage';

export default () => {
	// store永続化設定
	const persistConfig = {
		key: 'root',
		storage,
		// whitelist: [], // 保存したい
		// blacklist: ['search'], // 保存したくない
	};
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));
	sagaMiddleware.run(rootSagas);
	const persistor = persistStore(store);
	return { store, persistor };
};
