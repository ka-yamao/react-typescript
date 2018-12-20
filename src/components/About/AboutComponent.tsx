import * as React from 'react';
import { AppState } from '../../modules/index';
import { MainActions } from '../../containers/AboutContainer';
import * as style from './AboutComponent.css';

interface OwnProps {}

type HogeProps = OwnProps & AppState & MainActions;

export const AboutComponent: React.SFC<HogeProps> = (props: HogeProps) => {
	return <div className={style.searchForm}>About</div>;
};
