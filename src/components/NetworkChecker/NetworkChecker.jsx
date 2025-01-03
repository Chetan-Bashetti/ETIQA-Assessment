/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Snackbar } from '@mui/material';

const snackStyle = {
	success: {
		padding: '15px 40px',
		background: '#43a047',
		color: 'rgb(255, 255, 255)',
		borderRadius: '5px',
		transform: 'translate(0px, 0px)',
		transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
		minWidth: '200px',
		textAlign: 'center',
		fontWeight: '600'
	},
	error: {
		padding: '15px 40px',
		borderRadius: '5px',
		background: '#d32f2f',
		color: 'rgb(255, 255, 255)',
		transform: 'translate(0px, 0px)',
		transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
		minWidth: '200px',
		textAlign: 'center',
		fontWeight: '600'
	}
};

const CheckConnection = () => {
	const [openSnack, setOpenSnack] = React.useState(false);
	const [snackType, setSnackType] = React.useState('');
	const [snackbarMessage, setSnackBarMessage] = React.useState('');
	const [wasOffline, setWasOffline] = React.useState(false);

	let interval = null;

	useEffect(() => {
		interval = setInterval(updateStatus, 1000);
		return () => {
			clearInterval(interval); // for component unmount stop the interval
		};
	}, [wasOffline]);

	const updateStatus = () => {
		if (navigator.onLine) {
			if (wasOffline === true) {
				setOpenSnack(true);
				setSnackType('success');
				setSnackBarMessage('You are back online');
				setTimeout(() => {
					setWasOffline(false);
					setOpenSnack(false);
				}, 6000);
			}
		} else {
			setOpenSnack(true);
			setSnackType('error');
			setSnackBarMessage('Internet connection not found!');
			setWasOffline(true);
		}
	};

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center'
			}}
			open={openSnack}
			autoHideDuration={6000}
			onClose={() => setOpenSnack(false)}
		>
			<div
				style={{
					padding: '10px 20px',
					borderRadius: 5,
					...snackStyle[snackType]
				}}
			>
				<div>{snackbarMessage}</div>
			</div>
		</Snackbar>
	);
};
export default CheckConnection;
