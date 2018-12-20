import * as React from 'react';

export function lifecycleHook<P>(
	Component: React.SFC<P>,
	hooks: {
		didMount?: (props: P) => void;
		willMount?: (props: P) => void;
	}
) {
	return class StatefulComponent extends React.Component<P, {}> {
		public componentDidMount(): void {
			if (hooks.didMount) {
				hooks.didMount(this.props);
			}
		}

		public componentWillMount(): void {
			if (hooks.willMount) {
				hooks.willMount(this.props);
			}
		}

		public render() {
			return Component(this.props);
		}
	};
}
