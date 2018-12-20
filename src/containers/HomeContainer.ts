import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, Actions } from '../modules';
import { HomeComponent } from '../components/Home/HomeComponent';

export interface MainActions {
	updateName: (v: string) => Action<string>;
	updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
	return {
		updateName: (v: string) => dispatch(Actions.main.searchStart(v)),
		updateEmail: (v: string) => dispatch(Actions.main.searchDone(v)),
	};
}

function mapStateToProps(appState: AppState) {
	return { ...appState.main };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent);
