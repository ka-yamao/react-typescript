import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import stores from './stores';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { LoadingComponent } from './components/Loading/LoadingComponent';

const { store, persistor } = stores();
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<LoadingComponent />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();

interface Hoge {}

type Props = Hoge & Hoge1 & Hoge2;

const hogeFunc = (p: Props) => {
	console.log(p.hoge.hoge1);
	// alert(1);
};

interface Hoge1 {
	hoge1: string;
	text1: number;
}

interface Hoge2 {
	hoge2: string;
	text2: number;
	hoge: Hoge1;
}

const h: any = {
	hoge1: 'hoge1',
	text1: 0,
	hoge: {
		hoge1: 'hoge1',
		text1: 0,
	},
};

const myAdd: (px: number, py: number) => number = (x: number, y: number): number => {
	console.log(x + '/' + y);
	return x + y;
};
myAdd(1, 2);

hogeFunc(h);
