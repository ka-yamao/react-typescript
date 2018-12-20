import * as React from 'react';
import { AppState } from '../../modules';
import { MainActions } from '../../containers/HomeContainer';
import * as commonStyle from '../../index.css';
import * as style from './HomeComponent.css';

export enum LIST {
	FOO = 'foo',
	BAR = 'bar',
}

const menus: LIST[] = [LIST.FOO, LIST.BAR];

interface OwnProps {}

type Props = OwnProps & AppState & MainActions;

export const HomeComponent: React.SFC<Props> = (props: Props) => {
	console.log(props);

	return (
		<div className={commonStyle.main}>
			<div className={style.menuArea}>
				<div className={style.menuAreaColContainer}>
					<div className={style.menuAreaCol}>
						<ul>
							{menus.map(m => {
								return <li key={m}>{m}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
