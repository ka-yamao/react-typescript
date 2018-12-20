import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, Actions } from '../modules/index';
import { AboutComponent } from '../components/About/AboutComponent';

export interface MainActions {
	searchStart: (v: string) => Action<string>;
	searchDone: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
	return {
		searchStart: (v: string) => dispatch(Actions.main.searchStart(v)),
		searchDone: (v: string) => dispatch(Actions.main.searchDone(v)),
	};
}

function mapStateToProps(appState: AppState) {
	return { ...appState.main };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AboutComponent);
