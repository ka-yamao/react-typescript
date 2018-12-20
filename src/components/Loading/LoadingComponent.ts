import * as React from 'react';
import { lifecycleHook } from './LifecycleHook';

interface OwnProps {}
type Props = OwnProps;

const loadingComponent: React.SFC<Props> = (props: Props) => {
	return null;
};

// ライフサイクル
export const LoadingComponent = lifecycleHook<Props>(loadingComponent, {
	didMount: (props: Props) => {
		return props;
	},
	willMount: (props: Props) => {
		return props;
	},
});
