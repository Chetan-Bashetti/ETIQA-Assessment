import React from 'react';
import { Button } from '@mui/material';

const errorStyles = {
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	errorText: {
		fontSize: '2em',
		fontWeight: 500,
		marginBottom: '1em'
	}
};

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, 'ERROR');
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={errorStyles.wrapper}>
					<div style={errorStyles.errorText}>
						Something went wrong. Please reload
					</div>
					<Button variant='contained' onClick={() => window.reload()}>
						Reload
					</Button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
